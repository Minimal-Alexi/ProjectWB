const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const adSchema = new Schema(
    {
        vendorID:
        {
            type: Schema.Types.ObjectId, ref: "User",
            required: true,
        },
        pricing:
        {
            type:Number,
            required:true,
        },
/*         image:
        {
            type: Image,
            required: false,
        }, */
    }
);

module.exports = mongoose.model("Ad",adSchema)