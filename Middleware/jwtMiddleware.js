const jwt = require('jsonwebtoken')
const jwtmiddleware = (req,res,next)=>{
    console.log("Inside the Middleware");


try{
 const token = req.header['x-access-token']

 // verification
 const tokenVerification = jwt.verify('token','superkey2024')
 req.payload = tokenVerification.userId
 next()
}
catch(err){
res.status(401).json('Authentication Error...please login again')
}}
module.exports = jwtmiddleware