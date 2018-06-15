const createEncryptionSet = require('./module');

const algorithm = 'aes-192-ccm';
const key = 'keykeykeykeykeykeykeykey';
const aad = Buffer.from('0123456789', 'hex');

const { encrypt, decrypt } = createEncryptionSet({ algorithm, key, aad });

const unreadable = encrypt('hello world');
decrypt(unreadable);
