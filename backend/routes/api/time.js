const express = require("express");
const Profile = require("../../models/Profile");
const router = express.Router();

//@route  POST api/users
//@desc   add time
//@access Public
router.post("/", (req,res) => {
   
const{
    inTime,
    outTime,
    date
} = req.body

//create a new time instance

    time = new Profile({
        time:[{
        inTime,
        outTime,
        date
        }]
      });

       await time.save();


})