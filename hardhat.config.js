require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
const { AMOY_URL, SEPOLIA_URL, PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env;
module.exports = {
  solidity: "0.8.20",
  networks: {
    // mumbai: {
    //   url: "https://rpc-mumbai.maticvigil.com",
    //   accounts: [`0x${PRIVATE_KEY}`],
    // },
    sepolia: {
      url: SEPOLIA_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    amoy: {
      url: AMOY_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    // goerli: {
    //   url: "https://ethereum-goerli.publicnode.com",
    //   accounts: [process.env.PRIVATE_KEY],
    // },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};
