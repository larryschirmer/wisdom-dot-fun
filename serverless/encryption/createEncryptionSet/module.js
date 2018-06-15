const { randomBytes, createCipheriv, createDecipheriv } = require('crypto');

const createEncryptionSet = ({ algorithm, key }) => {
  // https://nodejs.org/api/crypto.html#crypto_ccm_mode

  const aad = Buffer.from('0123456789', 'hex');

  const encrypt = text => {
    try {
      const nonce = randomBytes(12);
      const opts = { authTagLength: 16 };
      let cipher = createCipheriv(algorithm, key, nonce, opts);

      const plaintextLength = Buffer.byteLength(text);
      cipher.setAAD(aad, { plaintextLength });

      const ciphertext = cipher.update(text, 'utf8');
      cipher.final();
      const tag = cipher.getAuthTag();

      return JSON.stringify({ text: ciphertext, nonce, tag });
    } catch (e) {
      console.log(e);
      throw { error: true, message: 'encrypt', stackMessage: e };
    }
  };

  const decrypt = secretMessage => {
    try {
      let { text, nonce, tag } = JSON.parse(secretMessage);
      text = Buffer.from(text);
      nonce = Buffer.from(nonce);
      tag = Buffer.from(tag);

      const opts = { authTagLength: 16 };
      const decipher = createDecipheriv(algorithm, key, nonce, opts);
      decipher.setAuthTag(tag);

      const plaintextLength = text.length;
      decipher.setAAD(aad, { plaintextLength });

      const decryptedtext = decipher.update(text, null, 'utf8');

      decipher.final();
      return decryptedtext;
    } catch (e) {
      throw { error: true, stackMessage: e };
    }
  };

  return { encrypt, decrypt };
};

module.exports = createEncryptionSet;
