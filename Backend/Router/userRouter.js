const express = require('express');
const router = express.Router();

//GET /users
router.get('/');

//GET /users/:userID
router.get('/:userID');

//POST /users
router.post('/');

//PUT /users/:userID
router.put('/:userID');

//DELETE /users/:userID
router.delete('/:userID');

module.exports = router;