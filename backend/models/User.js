const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
    firstName:{
        type : String
    },
    lastName:{
        type : String
    },
    email:{
        type : String,
        required:true
    },
    mobileNo:{
        type : String
    },
    address:{
        type:String
    },
    gender:{
        type:String
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})
module.exports = User =mongoose.model('Users',UserSchema)