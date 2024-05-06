const hre = require("hardhat");
require("dotenv").config();

const { CONTRACT_ADDRESS } = process.env;

async function main() {
  const MetaNFT = await hre.ethers.getContractFactory("MetaNFT");
  const metaNFT = MetaNFT.attach(CONTRACT_ADDRESS);

  console.log(await metaNFT.promptDescription());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});