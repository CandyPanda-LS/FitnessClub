const express = require("express")
const users = express.Router()
const cors = require("cors")
const jwt = require("jasonwebtoken")
const bcrypt = require("bcrypt")

const User = require("../models/User")
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register',(req,res) => {
    const today = new Date();
    const userData = {
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        mobileNo : req.body.mobileNo,
        address : req.body.address,
        gender : req.body.email,
        password :req.body.password,
        created : today
    }

    User.findOne({
        email : req.body.email
    })

    .then(user => {
        if(!user){
            bcrypt.hash(req.body.password,10,(err,hash) => {
                userData.password = hash
                User.create(userData)
            })
        }
    })

}