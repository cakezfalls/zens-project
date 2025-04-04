require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
    url: process.env.ALCHEMY_API_KEY,
    accounts: [process.env.JENNI_PRIVATE_KEY]
    }
  }
};
