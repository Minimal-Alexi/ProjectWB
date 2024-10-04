const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require('../Models/userModel'); 
// Generate JWT
const generateToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, {
    expiresIn: "3d",
  });
};

// @desc    Register new user
// @route   POST /api/users/signup
// @access  Public
const signupUser = async (req, res) => {
  const {
    username,
    email,
    firstName,
    lastName,
    password,
    phoneNumber,
    accountType,
    countryCode,
    location,
    age,
    gender,
  } = req.body;

  try {
    // Ensure all required fields are present
    if (
      !username ||
      !email ||
      !firstName ||
      !lastName ||
      !password ||
      !accountType ||
      !countryCode ||
      !location ||
      !age ||
      !gender
    ) {
      res.status(400);
      throw new Error("Please add all required fields");
    }

    // Check if user already exists
    const userExists = await User.findOne({ username });

    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }

    // Hash password and generate a password salt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await User.create({
      username,
      email,
      firstName,
      lastName,
      password: hashedPassword,
      passwordSalt: salt,
      accountType,
      countryCode,
      location,
      phoneNumber,
      age,
      gender,
    });

    if (user) {
      const token = generateToken(user._id);
      res.status(201).json({ username: user.username, token });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check for the user by username
    const user = await User.findOne({ username });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = generateToken(user._id);
      res.status(200).json({ username: user.username, token });
    } else {
      res.status(400);
      throw new Error("Invalid credentials");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getMe = async (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  signupUser,
  loginUser,
  getMe,
};
