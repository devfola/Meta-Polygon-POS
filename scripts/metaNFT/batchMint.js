const hre = require("hardhat");
require("dotenv").config();

const { ACCOUNT_ADDRESS, CONTRACT_ADDRESS } = process.env;

async function main() {
  const MetaNFT = await hre.ethers.getContractFactory("MetaNFT");
  const metaNFT = MetaNFT.attach(CONTRACT_ADDRESS);

  const mintTx = await metaNFT.safeMint(5);
  await mintTx.wait();

  console.log(
    `${await metaNFT.balanceOf(
      ACCOUNT_ADDRESS
    )} MetaNFTs Minted to ${ACCOUNT_ADDRESS}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
