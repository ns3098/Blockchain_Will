const EtherWills = require('./../ethereum/build/contracts/EtherWills.json');


export const ethwill = async (address) =>{
	console.log(address)
	return await new window.web3.eth.Contract(
		EtherWills['abi'],
		address
	);
} 

