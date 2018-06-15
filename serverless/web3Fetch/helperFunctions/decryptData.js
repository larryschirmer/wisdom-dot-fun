const axios = require('axios');

module.exports = async data => {
  const url = 'https://6xv90uibo0.execute-api.us-east-1.amazonaws.com/dev/decrypt';

  try {
    const res = await axios.post(url, { text: data });
    return res.data.text;
  } catch (e) {
    throw e;
  }
};
