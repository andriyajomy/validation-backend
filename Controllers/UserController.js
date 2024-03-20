// import model name -users

const users = require('../Models/userSchema')
// jwt

const jwt = require('jsonwebtoken')

// register 
exports.register = async (req,res)=>{
    console.log("Inside the Register Function");

    try{
const {
    Name,
    userName,
    password,address,gender
} = req.body
const existingUser = await users.findOne({ 
    userName
})
if(existingUser){
    res.status(401).json("User Already Exists")
}
else{
    const newUser = new users({
        Name,userName,password,address,gender
    })
    console.log(newUser);
    await newUser.save()
    res.status(200).json("Registered Successfully")

}
    }
    catch(err){
res.status(403).json("Register Error" )
    }
}


// login

exports.login = async(req,res)=>{
    console.log("Inside Login Function");


try{
    const {
        userName,password
    }=req.body
    const user = await users.findOne({
        userName,password
    })
    if(user){
        const token = jwt.sign({userId:user._id},'superKey2024')
        res.status(200).json({user,token})
    }
    else{
        res.status(402).json("Invalid Login ")
    }
}
catch(err){
res.status(403).json("Server Error")
}
}