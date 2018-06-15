const contract = require('./contract');

module.exports.getDeployedWisdom = async () => {
  try {
    const { getDeployedWisdom } = contract().methods;
    const wisdomArray = await getDeployedWisdom().call();
    return wisdomArray;
  } catch (e) {
    throw e;
  }
};

module.exports.getWisdom = async address => {
  try {
    const { getWisdom } = contract().methods;
    const wisdom = await getWisdom(address).call();

    return wisdom;
  } catch (e) {
    throw e;
  }
};
