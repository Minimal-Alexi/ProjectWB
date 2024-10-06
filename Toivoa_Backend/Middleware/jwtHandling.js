
const jwt = require('jsonwebtoken');
const User = require("../Models/userModel");

const SECRET = require('crypto').randomBytes(64).toString('hex');

const createToken = (_id) => {
  return jwt.sign({ _id }, SECRET, { expiresIn: '3d' });
}

const requireAuth = async (req, res, next) => {
  // verify user is authenticated
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, SECRET);

    req.userID = await User.findOne({ _id }).select("_id");
    // console.log(req.user);
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Request is not authorized" });
  }
};

module.exports =
{
  createToken,
  requireAuth
}