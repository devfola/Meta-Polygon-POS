# META NFT
Meta NFT is a a simple solidity smart contract that bridges NFT from ethereum to Polygon. 

## Description
This smart contract deploys an NFT smart contract on the ethereum chain, mints the NFT to an address, and then approves and transfers the NFT to the Polygon chain.

The smart contract simply  has 4 functions:

- safeMint(): This act as the batchMint in the ERC1155 where you can mint as many quantity of NFT in a single transaction.
-  _baseURI(): This gets the base URI for the images. This is mostly useful for the NFT marketplace to display the NFTs.
- promptDescription(): This gets the prompt description.
- balanceOf(): This allows user to check how many NFTs they have in their balance.
- fxRootContract.deposit(): This function is not part of my smart contract functions, but this is the function that does all the magic. The fxRootContract is the bridge contract and in it is the deposit function that does all the transfer from ethereum to Polygon.

## Getting Started
```git clone https://github.com/devfola/Meta-Polygon-POS.git``` to clone the project. 
After cloning the github, do the following to get the code running on your computer.

- Inside the project directory, in the terminal type: npm i
- WH
- When all of the dependencies are downloaded, change the .env.example to .env and fill in all the necessary information. NOTE: Make sure you added .env into your .gitignore so you don't push your private key to GitHub.
- Once these are done, go ahead to deploy your contract by running this command ```npx hardhat run scripts/metaNFT/deploy.js --network amoy```. 
- When you have deployed your contract, update your .env file by adding the newly deployed contract address.
- Go ahead and batchMint by running this command ```npx hardhat run scripts/metaNFT/batchMint.js --network amoy```. This will mint all the NFTs to your address.
- When the minting is done, go ahead and approve and transfer to the Polygon chain by running the following command ```run scripts/metaNFT/approveTransfer.js --network amoy```. 
- It will take about 20-30minutes before the transaction reflects on Polygon.
- After about 20-30minutes, check the balance on Polygon by running this command ```npx hardhat run scripts/metaNFT/getBalance.js --network amoy```
- You can go ahead to do other interactions now.

## Authors
Warith Adebowale

## License
This project is licensed under the MIT License - see the LICENSE.md file for details
