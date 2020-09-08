const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  //@author Dilmi

  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  password2: {
    type: String,
    required: true,
  },
  mobileNo: {
    type: String,
  },
  address: {
    type: String,
  },
  gender: {
    type: String,
  },
  profImage: {
    type: String,
  },
});
module.exports = User = mongoose.model("user", UserSchema);
