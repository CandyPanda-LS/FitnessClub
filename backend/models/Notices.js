const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoticeSchema = new Schema({
    //@author nayana
    NoticeTitle: {
        type: String,
        required: true,

    },
    NoticeDescriprion: {
        type: String,
        required: true,
    },
    Date: {
        type: Date,
        required: true,
    },

});

const Notices = mongoose.model("Notices", NoticeSchema);
module.exports = Notices;