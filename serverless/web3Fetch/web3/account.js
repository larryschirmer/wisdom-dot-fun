const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const providerURL = process.env.PROVIDERURL;
const seedwords = process.env.SEEDWORDS;

module.exports = () => {
  const provider = new HDWalletProvider(seedwords, providerURL);
  const web3 = new Web3(provider);

  return web3;
};
