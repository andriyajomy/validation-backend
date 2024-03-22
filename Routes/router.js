// express

const express = require('express')

// jwt files

const jwtMiddleware = require('../Middleware/jwtMiddleware')

// controller

const userController = require('../Controllers/UserController')

// userSchema

const userSchema =require('../Models/userSchema')
// router

const router = express.Router()

// login
router.post('/register',userController.register)

// register 

router.post('/login',userController.login)

//add

router.post('/add',userController.addFormDetails)


module.exports = router