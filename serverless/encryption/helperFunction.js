module.exports.envVars = {
  algorithm: process.env.ALGORITHM,
  key: process.env.KEY,
};

module.exports.parseText = ({ body }) => {
  try {
    const { text } = JSON.parse(body);
    return text;
  } catch (e) {
    throw `please include a key in body called, 'text'`;
  }
};

module.exports.stringToHex = string => Buffer.from(string, 'utf8').toString('hex');
module.exports.hexToString = hex => Buffer.from(hex, 'hex').toString('utf8');
