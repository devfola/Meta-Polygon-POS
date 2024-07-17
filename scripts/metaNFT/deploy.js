const hre = require("hardhat");

async function main() {

  const metaNFT = await hre.ethers.deployContract("MetaNFT");
  const [signer] =   await hre.ethers.getSigners();

  console.log(`${signer.address} deploys MetaNFT contract to address: ${await metaNFT.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});