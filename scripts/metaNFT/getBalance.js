const hre = require("hardhat");
require("dotenv").config();

const { ACCOUNT_ADDRESS, CONTRACT_ADDRESS } = process.env;

async function main() {
  const MetaNFT = await hre.ethers.getContractFactory("MetaNFT");
  const metaNFT = await MetaNFT.attach(CONTRACT_ADDRESS);

  const balance = await metaNFT.balanceOf(ACCOUNT_ADDRESS);

  console.log("Balance: ", balance.toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});