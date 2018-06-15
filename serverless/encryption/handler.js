'use strict';
const createEncryptionSet = require('./createEncryptionSet/module');
const { algorithm, key } = require('./helperFunction').envVars;
const { parseText, stringToHex, hexToString } = require('./helperFunction');

const { encrypt, decrypt } = createEncryptionSet({ algorithm, key });

module.exports.encrypt = (e, context, callback) => {
  let text;
  try {
    text = parseText(e, callback);
  } catch (e) {
    callback(null, {
      statusCode: 400,
      body: JSON.stringify({ error: true, message: e }),
    });
    return;
  }

  let encryptedText;
  try {
    encryptedText = encrypt(text);
  } catch (e) {
    encryptedText = e;
  }

  if (encryptedText.error) {
    callback(null, {
      statusCode: 400,
      body: JSON.stringify({ ...encryptedText }),
    });
  }

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ text: stringToHex(encryptedText) }),
  });
};

module.exports.decrypt = (e, context, callback) => {
  let text;
  try {
    text = parseText(e, callback);
  } catch (e) {
    callback(null, {
      statusCode: 400,
      body: JSON.stringify({ error: true, message: e }),
    });
    return;
  }

  let decryptedText;
  try {
    const string = hexToString(text);
    decryptedText = decrypt(string);
  } catch (e) {
    decryptedText = e;
  }

  if (decryptedText.error) {
    callback(null, {
      statusCode: 400,
      body: JSON.stringify({ ...decryptedText }),
    });
  }

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ text: decryptedText }),
  });
};
