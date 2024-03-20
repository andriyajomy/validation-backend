// node + mongodb

const mongoose = require('mongoose')

// connection string

const connectionString = process.env.DATABASE
mongoose.connect(connectionString).then(()=>{
    console.log("Mongodb Connection Established");
})
.catch((err)=>{
    console.log("Mongodb  Connection error"+ err.message);
})