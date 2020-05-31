pragma solidity >=0.4.22 <0.6.0;

contract EtherWills{
    
    address payable testor;
    address payable[] beneficiaries;
    uint256[] share;
    mapping(address => uint256) division;
    mapping(address => bool) hasExecuted;
    bool created = false;
    bytes6 code;
    uint256 left = 100; 
    //encrypted private key
    bytes32 private keystoreJSON;
    //hash of secret
    bytes32 private secretKey;
    uint256 a = 0;
    uint256 LastCheckIn = 0;
    uint256 TimeLeft = 0;
    uint256 WillCreationTime;
    uint256 periodCheckIn;
    
    constructor(address payable _testor,address payable[] memory _beneficiary, uint256[] memory  _share,bytes32 json, bytes32 _secretKey,uint256 _periodCheckIn) public {
        testor = _testor;
        createWill(_beneficiary,_share,json,_secretKey,_periodCheckIn);
    }

    modifier onlyTestor{
        require(msg.sender==testor,"Only testor can have access to this function");
        _;
    }
    
    function getCode() public view returns(bytes6){
        require(division[msg.sender]!=0,"You are not part of this will");
        require(now>(WillCreationTime+(a*periodCheckIn* 1 minutes)),"Testor still alive, code not accessible");
        return code;
    }
    
    //add Beneficiary to the contract
    function setBeneficiary(address payable beneficiary) private {
        require(testor!=beneficiary,"testor cannot be beneficiary");
        beneficiaries.push(beneficiary);
        hasExecuted[beneficiary] = false;
    }
    
    function shareSum(uint256[] memory _shares) private pure returns(uint256){
        uint256 sum = 0;
        uint len = _shares.length;
        for(uint i = 0; i<len;i++) {
            sum+=_shares[i];
        }
        return sum;
    }
    
    //Adding information to the will
    function createWill(address payable[] memory _beneficiary, uint256[] memory  _share,bytes32 json, bytes32 _secretKey,uint256 _periodCheckIn) private{
        //each beneficiary to get a some share
        //Summation of the division of shares should be hundred
        require(_beneficiary.length==_share.length,"Each beneficiary is to receieve some percentage");
        require(shareSum(_share)==100,"Summation of the share of each beneficiary should be 100");
        require(created==false,"Will already created");
        uint256 len = _beneficiary.length;
        for(uint256 i = 0;i<len;i++){
            setBeneficiary(_beneficiary[i]);
            division[_beneficiary[i]] = _share[i];
        }
        share = _share;
        created = true;
        secretKey = _secretKey;
        keystoreJSON = json;
        a = a + 1;
        WillCreationTime = now;
        periodCheckIn = _periodCheckIn;
        //Creating a code consisting of hash whose length is 6
        code = bytes6(keccak256(abi.encode(beneficiaries,share,secretKey,keystoreJSON,periodCheckIn)));
    }
    
    //accept ether from WillStorage contract
    function deposit() external payable onlyTestor{
        require(now>TimeLeft+LastCheckIn,"You have already pinged once within the period");
        require(now<WillCreationTime+(a*periodCheckIn* 1 minutes),"Period has passed, will is not executable");
        LastCheckIn = now;
        TimeLeft = WillCreationTime+(a*periodCheckIn * 1 minutes)-now;
        a = a+1;
    }
    
    function executeWill(bytes6 _code) external {
        require(_code==code,"Wrong code");
        require(division[msg.sender]!=0,"You are not part of this will");
        require(hasExecuted[msg.sender]==false,"Will already executed");
        hasExecuted[msg.sender] = true;
    }

    function WillDetails() public view returns(bytes32,bytes32,uint256){
        require(division[msg.sender]!=0,"You are not part of this will");
        require(hasExecuted[msg.sender]==true,"Will not yet executed");
        return (keystoreJSON,secretKey,division[msg.sender]);
    }
    
    function executed() public view returns(bool) {
        require(division[msg.sender]!=0,"You are not part of this will");
        return hasExecuted[msg.sender];
    }

    function deleteWill(bytes6 _code) public onlyTestor {
        require(_code==code,"You have entered the wrong code");
        selfdestruct(msg.sender);
    }

    function checkExecutable() public view returns(bool){
        require(division[msg.sender]!=0,"You are not part of this will");
        return (WillCreationTime+(a*periodCheckIn * 1 minutes))<now;
    }

    function queryWill() public view onlyTestor returns (address,uint256[] memory, address payable[] memory,uint256,bytes6,uint256,uint256){
        uint256[] memory _share = share;
        address payable[] memory _beneficiaries = beneficiaries;
        return (testor, _share, _beneficiaries,((WillCreationTime+(a*periodCheckIn * 1 minutes))-now),code,a,periodCheckIn);
    }
}