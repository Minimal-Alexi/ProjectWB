const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema(
    {
        productID:
        {
            type: Schema.Types.ObjectId, ref: "User",
            required: true 
        },
        userID: 
        {
            type: Schema.Types.ObjectId, ref: "Product",
            required: true 
        },
        quantity:
        {
            type:Number,
            required:true
        }
    }
);

module.exports = mongoose.model("Order", orderSchema);