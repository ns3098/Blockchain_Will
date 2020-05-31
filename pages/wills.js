const WillStorage = require('./../ethereum/build/contracts/WillStorage.json');

export const wills = async () => {
	return await new window.web3.eth.Contract(WillStorage['abi'], '0x6E2bA713755eCdA013dD7f322EE6cff3116fd6D0'); 
};
