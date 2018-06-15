'use strict';
const { getDeployedWisdom, getWisdom } = require('./web3/module');
const { evaluateAsyncArray, decryptData } = require('./helperFunctions');

module.exports.fetch = async (e, context, callback) => {
  try {
    const wisdomAddresses = await getDeployedWisdom();
    const encryptedWisdom = await evaluateAsyncArray(wisdomAddresses, getWisdom);
    const decryptedWisdom = await evaluateAsyncArray(encryptedWisdom, decryptData);

    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ array: decryptedWisdom }),
    });
  } catch (e) {
    callback(null, {
      statusCode: 400,
      body: JSON.stringify({ e }),
    });
  }
};
