const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PackageSchema = new Schema({
    //@author nayana
    PackageName: {
        type: String,
        required: true,

    },
    PackagePrice: {
        type: String,
        required: true,
    },
    PackageDescriprion: {
        type: String,
        required: true,
    },
    ImgPath: {
        type: String,
        required: true,
    },

});

const Packages = mongoose.model("Packages", PackageSchema);
module.exports = Packages;