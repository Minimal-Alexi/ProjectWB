/*
    userID: "ajKJE1K32LLSADmcx"
    username: "Gigel_Costel"
    email: "Gigel@yahoo.com"
    password: "ASDKSLKLMXAS"
    password_salt: "LSKDASLKXLA"
    account_type: 0
    country: "US"
    location: "Alea manastur"
    phone_number: 12938398219581958
    age: 69
    gender: "M"
*/

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username:
        {
            type: String,
            required: true,
            unique: true,
        },
        email:{
            type: String,
            required: true,
            unique: true,
        },
        firstName:
        {
            type: String,
            required: true,
        },
        lastName:
        {
            type: String,
            required: true,
        },
        password:
        {
            type:String,
            required:true,
        },
        passwordSalt:
        {
            type:String,
            required:true,
        },
        accountType:
        {
            type:Number,
            required:true,
        },
        countryCode:
        {
            type:String,
            required:true,
        },
        location:
        {
            type:String,
            required:false,
        },
        phoneNumber:
        {
            type:String,
            required:false,
        },
        age:
        {
            type:Number,
            required:false,
        },
        gender:
        {
            type:String,
            required:false,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);