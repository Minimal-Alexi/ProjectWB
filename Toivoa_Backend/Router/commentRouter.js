const express = require('express');
const router = express.Router();
const {
    getComments,
    createComment,
    updateComment
} = require('../Controller/commentController');

//GET /comments
router.get('/', getComments);

//POST /comments
router.post('/', createComment);

//PUT /comments
router.put('/productID', updateComment);

//DELETE /comments
router.delete('/:productID', deleteComment);

module.exports = router;