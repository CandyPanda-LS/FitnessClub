const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const instructorSchema = new Schema(
  {
    instructorID: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },

    name: { type: String, required: true },

    dob: { type: Date, required: true },

    gender: { type: String, required: true },

    address: { type: String, required: true },

    phone: { type: Number, required: true },

    email: { type: String, required: true },

    password: { type: String, required: true },
  },
  {
    timestamps: true, //it will automatically create fields when it is created or modified
  }
);

const Instructor = mongoose.model("Instructor", instructorSchema);

module.exports = Instructor;