
// import mongoose
const mongoose = require('mongoose');

// create schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female'], 
        required: true
    },
    phone:{
        type:String
    },
    dob:{
type:Date
    },
    place:{
        type:String,
        enum:['Place1','Place2','Place3']
    },
    agreeTerms:{
        type:Boolean
    }
    

});

const users = mongoose.model("users", userSchema);
module.exports = users;
