const Users = require('../Models/userModel');
const mongoose = require("mongoose");

//GET /users
const getAllUsers = async (req, res) => {
    try {
        const users = await Users.find({}).sort({ createdAt: -1 });
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ message: "Failed to retrieve users." });
    }
};

//GET /users/:userID

const getUserbyID = async (req, res) => {
    const userID = req.params.userID;
    if (!mongoose.Types.ObjectId.isValid(userID)) {
        return res.status(400).json({ message: "Invalid userID" })
    }
    try {
        const user = await Users.findById(userID);
        if (user) {
            res.status(200).json(user);
        }
        else {
            res.status(404).json({ message: "User not found." });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Failed to retrieve user." });
    }
}

//POST /users

const createUser = async (req, res) => {
    try {
        const { createToken } = require('../Middleware/jwtHandling');
        const { passwordEncryption } = require('../Middleware/passwordHandling');

        const passwordEssentials = await passwordEncryption(req.body.password)
        req.body.password = passwordEssentials.hashedPassword;
        req.body.passwordSalt = passwordEssentials.passwordSalt;
        const newUser = await Users.create({ ...req.body });

        //Create JWT Token
        token = createToken(newUser._id);

        res.status(201).json({ message: "User registered successfully", token });
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ message: "Failed to create user", error: error.message });
    }
}

//POST /users/login

const loginUser = async (req, res) => {
    try {
        const { createToken } = require('../Middleware/jwtHandling');

        const {email,password} = req.body;
        const user = await Users.findOne({email});
        if(!user)
            {
                return res.status(400).json({message:"Invalid credentials"});
            }
        const {comparePassword}  = require('../Middleware/passwordHandling');
        const isMatch = await comparePassword(password,user.password);
        if(!isMatch)
            {
                return res.status(400).json({message:"Invalid credentials"});
            }
        //Create JWT Token
        token = createToken(user._id);
        res.status(200).json({message:"Login succesful",token});
    }
    catch (error)
    {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
}

//PUT /users/:userID

const updateUser = async (req, res) => {
    const userID = req.params.userID;
    if (!mongoose.Types.ObjectId.isValid(userID)) {
        return res.status(400).json({ message: "Invalid userID" })
    }
    try {
        const updatedUser = await Users.findOneAndUpdate(
            { _id: userID },
            { ...req.body },
            { new: true, overwrite: true },
        )
        if (updatedUser) {
            res.status(200).json(updatedUser);
        }
        else {
            res.status(404).json({ message: "User not found." });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Failed to update user." });
    }
}

//DELETE /users/:userID

const deleteUser = async (req, res) => {
    const userID = req.params.userID;
    if (!mongoose.Types.ObjectId.isValid(userID)) {
        return res.status(400).json({ message: "Invalid userID" })
    }
    try {
        const deletedUser = await Users.findOneAndDelete({ _id: userID })
        if (deletedUser) {
            res.status(200).json({ message: "User deleted successfully." });
        }
        else {
            res.status(404).json({ message: "User not found." });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Failed to update user." });
    }
}

module.exports =
{
    getAllUsers,
    getUserbyID,
    createUser,
    loginUser,
    updateUser,
    deleteUser
}