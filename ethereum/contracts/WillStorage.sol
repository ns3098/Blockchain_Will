pragma solidity >=0.4.22 <0.6.0;

import "./EtherWills.sol";

contract WillStorage{
    //storing will with respect to the address and the role of the address
    mapping(address=>mapping(uint256=>mapping(uint256=>address))) contract_roles;
    mapping(address=>uint256) private beneficiary_contracts;
    mapping(address=>bool) selfdestructed;
    mapping(address=>mapping(bytes32=>bytes32)) private security_question;
    mapping(address=>string) private security;
    //Creating a Will
    function WillCreation(address payable[] memory _beneficiary, uint256[] memory _shares,bytes32 json, bytes32  _secretKey,uint256 _periodCheckIn) public {
        require(contract_roles[msg.sender][0][0]==address(0x0000000000000000000000000000000000000000),"Will already created");
        address payable[] memory beneficiary = _beneficiary;
        uint256[] memory shares = _shares;
        bytes32 keystoreJSON = json;
        bytes32 secretKey = _secretKey;
        uint256 periodCheckIn = _periodCheckIn;
        //creating will contract to receive will instance
        EtherWills w = new EtherWills(msg.sender,beneficiary,shares,keystoreJSON,secretKey,periodCheckIn);
        setBeneficiary(_beneficiary,address(w));
        contract_roles[msg.sender][0][0] = address(w);
    }
    
    //set Beneficiary role and address of the will
    function setBeneficiary(address payable[] memory _beneficiary, address will) private{
        uint256 len = _beneficiary.length;
        for(uint256 i = 0; i<len;i++){
            contract_roles[_beneficiary[i]][1][beneficiary_contracts[_beneficiary[i]]] = will;
            beneficiary_contracts[_beneficiary[i]]+=1;
        }
    }
    
    function getWillExistence(address w) public view returns(bool){
        return selfdestructed[w];
    }

    function numberOfWillsAsBeneficiary() public view returns(uint256){
        return beneficiary_contracts[msg.sender];
    }
    
    //get testor role and address of the will
    function getTestor(address testor) external view returns(address){
        return contract_roles[testor][0][0];
    }
    
    //get Beneficiary role and address of the will
    function getBeneficiary(address Beneficiary,uint256 no) external view returns(address){
        return contract_roles[Beneficiary][1][no];
    }

    function deleteWill() public {
        require(contract_roles[msg.sender][0][0]!=address(0x0000000000000000000000000000000000000000),"You do not have will");
        selfdestructed[contract_roles[msg.sender][0][0]] = true;
        contract_roles[msg.sender][0][0] = address(0x0000000000000000000000000000000000000000);
    }

}