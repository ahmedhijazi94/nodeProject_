const crypto = require('crypto');

const encrypt = (password) => {
    const secret = password;
    const hash = crypto.createHmac('sha256', secret)
        .update('Chiclete com Banana')
        .digest('hex');
    return hash;
}

module.exports = encrypt;