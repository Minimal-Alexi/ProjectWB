const mongoose = require("mongoose");

const Schema = mongoose.Schema;

/*
    commentID:"21903DKSAKJ"
    userID:"9138249iISDAJFDKA"
    rating: 3.5
    comment:"Shit product."
    date: "04.01.1994"
*/

const commentSchema = new mongoose.Schema({
    userID: 
    {
        type: Schema.Types.ObjectId, ref: "User",
        required: true 
    },
    rating: 
    {
        type: Number,
        required: true,
        min: 1, 
        max: 5 
    },
    comment:
    {
        type: String,
        required: true 
    },
    date:
    { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model("Comment", commentSchema)