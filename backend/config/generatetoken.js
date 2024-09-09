const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({ id },  'sandya-fitness', {
        expiresIn: "1d",
    });
};

module.exports = generateToken;
