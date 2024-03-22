// import model name -users

const users = require('../Models/userSchema')
// jwt

const jwt = require('jsonwebtoken')

// register 
exports.register = async (req,res)=>{
    console.log("Inside the Register Function");

    try{
const {
    name,
    username,
    password,address,gender
} = req.body
const existingUser = await users.findOne({ 
    username
})
if(existingUser){
    res.status(401).json("User Already Exists")
}
else{
    const newUser = new users({
        name,username,password,address,gender
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
        username,password
    }=req.body
    const user = await users.findOne({
        username,password
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

// add details

exports.addFormDetails = async(req,res)=>{
    console.log("Inside add form");
    
    const userId = req.payload

    const {name,username,password,address,gender,phone,dob,place,agreeTerms} = req.body

    console.log(userId,name,username,password,address,gender,phone,dob,place,agreeTerms);
    try{
const existingUser = await users.findOne({username})
if(existingUser){
    res.status(402).json("User Already Added")

}
else{
    const newUser = new users({
        userId,name,username,password,address,gender,phone,dob,place,agreeTerms
    })

    await newUser.save()
    res.status(200).json(newUser)
}
    }
    catch(err){
        res.status(407).json({message:err.message})

    }
}