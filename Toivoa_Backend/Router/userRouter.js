
const express = require('express');
const router = express.Router();
const {
    getAllUsers,
    getUserbyID,
    createUser,
    loginUser,
    updateUser,
    deleteUser,
    signupUser
} = require('../Controller/userController');

const 
{
    requireAuth
} = require("../Middleware/jwtHandling")

//GET /users
router.get('/',getAllUsers);

//GET /users/:userID
router.get('/:userID',getUserbyID);

//POST /users
router.post('/',createUser);

//POST /users/login
router.post('/login',loginUser);

// signup route
router.post("/signup", signupUser);

router.use(requireAuth);

//PUT /users/:userID
router.put('/:userID',updateUser);

//DELETE /users/:userID
router.delete('/:userID',deleteUser);

module.exports = router;