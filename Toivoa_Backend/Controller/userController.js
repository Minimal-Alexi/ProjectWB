const Users = require('../Models/userModel');

//GET /users
const getAllUsers = (req,res) =>
    {
        res.json(Users.getAll());
    }

//GET /users/:userID

const getUserbyID = (req,res) =>
    {
        const userID = req.params.userID;
        const user = Users.findOnebyID(userID);
        if(user)
            {
                res.json(user)
            }
        else
        {
            res.status(404).json({message:"User not found."});
        }
    }

//POST /users

const createUser = (req,res) =>
    {
        console.log(req.body);
        const user = Users.addOne({...req.body})
        if(user)
            {
                res.status(201).json(user);
            }
        else
        {
            res.status(500).json({message:"User could not be created."});
        }
    }

//PUT /users/:userID

const updateUser = (req,res) =>
    {
        const userID = req.params.userID;
        updatedUser = Users.updateOnebyID(userID);
        if(updatedUser)
            {
                res.json(updatedUser);
            }
        else
        {
            res.status(404).json({message:"User not found."});
        }
    }

//DELETE /users/:userID

const deleteUser = (req,res) =>
    {
        const userID = req.params.userID;
        deletedUser = Users.deleteOnebyID(userID);
        if(deletedUser)
            {
                res.status(204).send();
            }
        else
        {
            res.status(404).json({message:"User not found."});
        }
    }

module.exports = 
{
    getAllUsers,
    getUserbyID,
    createUser,
    updateUser,
    deleteUser
}