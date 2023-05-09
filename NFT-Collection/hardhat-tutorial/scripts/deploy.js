const { ethers } = require("hardhat");

async function main() {
  // Address of the whitelist contract that you deployed in the previous module
  const whitelistContract = "0x0d71e5167e2c1dB7e8F4bE3C17fA04Be79dcbC26";
  // URL from where we can extract the metadata for a Crypto Dev NFT
  const metadataURL = "http:/localhost:3000/api/";
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so cryptoDevsContract here is a factory for instances of our CryptoDevs contract.
  */
  const cryptoDevsContract = await ethers.getContractFactory("CryptoDevs");

  // deploy the contract
  const deployedCryptoDevsContract = await cryptoDevsContract.deploy(
    metadataURL,
    whitelistContract
  );

  // Wait for it to finish deploying
  await deployedCryptoDevsContract.deployed();

  // print the address of the deployed contract
  console.log(
    "Crypto Devs Contract Address:",
    deployedCryptoDevsContract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });