const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//@Author Dilmi
const UserSchema = new Schema({

    inTime: {
        type: String,
    },
    outTime: {
        type: String,
    },
   
});

module.exports = mongoose.model("Time", UserSchema);