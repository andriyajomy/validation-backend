// // import mongoose

// const mongoose = require('mongoose')

// // create schema
// const userSchema =new mongoose.Schema({
//     userId:{
//         type:String,
//         required:true
//     },
//     userName:{
//         type:String,
//         required:true
//     },
//     password:{
//         type:String,
//         required:true
//     }
// })
// const users = mongoose.model("users",userSchema)
// module.exports = users



// import mongoose
const mongoose = require('mongoose');

// create schema
const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    userName: {
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
        enum: ['male', 'female'], // Enum for radio button options
        required: true
    }
});

const users = mongoose.model("users", userSchema);
module.exports = users;
