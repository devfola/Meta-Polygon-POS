const hre = require("hardhat");

async function main() {
  const metaNFT = await hre.ethers.deployContract("MetaNFT");

  console.log("MetaNFT address:", await metaNFT.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});