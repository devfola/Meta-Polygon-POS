const hre = require("hardhat");
require("dotenv").config();

const { ACCOUNT_ADDRESS, CONTRACT_ADDRESS } = process.env;

const contractOnAmoy = "0x44F8f3b7b5F49cBEaDc517cd1a7a67b3EF607328";

async function main() {
  const MetaNFT = await hre.ethers.getContractFactory("MetaNFT");
  const nftContractOnAmoy = await MetaNFT.attach(contractOnAmoy);

  const balance = await nftContractOnAmoy.balanceOf(ACCOUNT_ADDRESS);

  console.log("Balance: ", balance.toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});