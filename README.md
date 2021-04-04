# Blockchain_Will
Using Blockchain_Will, you can assign beneficiaries to your will such that after a major life incident or death, the beneficiaries can receive the percentage of ether alloted to them in the will.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

To start with, make sure your node version is up to 10.+

```
node -V
```

1. Clone the repo

```
git clone https://github.com/ns3098/Blockchain_Will.git
```

2. Install dependencies.

```
npm i
```

3. Running the application

```
npm run dev
```


## NOTE: 1.Incase the buttons in the home page does not work, shutdown the application and run 'npm run dev' again.
##       2. After logging out, please wait for 5-10 seconds before clicking on the login button     

To deploy the contract, copy the contracts over to remix-ide and deploy only WillStorage on the Matic Alpha-Mainnet from MetaMask. Copy the contract address and update the address on [line 4 of wills.js](/pages/wills.js)

Make sure to have some matic ETH. Add matic ETH to your account from https://faucet.matic.network/ and select network Alpha
