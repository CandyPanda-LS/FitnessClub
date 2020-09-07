const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const aaa = new Schema(
  {
    ItemImage: {
      type: Buffer,
      required: true,
    },
  },
  {
    timestamps: true, //it will automatically create fields when it is created or modified
  }
);

const ImageProfile = mongoose.model("ImageProfile", aaa);

module.exports = ImageProfile;
