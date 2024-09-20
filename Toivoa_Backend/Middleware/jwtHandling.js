
const jwt = require('jsonwebtoken');

const SECRET= require('crypto').randomBytes(64).toString('hex');

const createToken = (_id) => {
    return jwt.sign({ _id }, SECRET, { expiresIn: '3d' });
  }

  