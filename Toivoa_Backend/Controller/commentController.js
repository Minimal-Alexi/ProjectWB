const Comment = require('../Models/commentModel')
const mongoose = require('mongoose');

const getComments = async (req, res) => {
    try {
        const comments = await Comment.find({}).sort({ createdAt: -1 });
        res.status(200).json(comments)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to retrieve comments." });
    }
}

const createComment = async (req, res) => {
    try {
        const newComment = await Comment.create({ ...req.body });
        res.status(201).json(newComment);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Failed to create comment" });
    }
}

const updateComment = async (req, res) => {
    const { commentId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(commentId)) {
        return res.status(400).json({ message: "Invalid comment ID" });
    }

    try {
        const updatedComment = await JsonWebTokenError.findOneAndUpdate(
            { _id: commentId },
            { ...req.body },
            { new: true }
        );
        if (updatedComment) {
            res.status(200).json(updatedComment);
        } else {
            res.status(404).json({ message: "Comment not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Failed to update comment" })
    }
}

const deleteComment = async (req, res) => {
    const { commentId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(commentId)) {
        return res.status(400).json({ message: "Invalid comment ID" });
    }

    try {
        const deletedComment = await Comment.findOneAndDelete({ _id: commentId });
        if (deletedComment) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: "Comment not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Failed to delete comment" });
    }
}

module.exports =
{
    getComments,
    createComment,
    updateComment,
    deleteComment,
}