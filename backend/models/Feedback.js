const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FeedbackSchema = new Schema(
  {
    radioFeedbackOne: { type: String },

    radioFeedbackTwo: { type: String },

    radioFeedbackThree: { type: String },

    radioFeedbackFour: { type: String },
  },
  {
    timestamps: true, //it will automatically create fields when it is created or modified
  }
);

const Feedback = mongoose.model("Feedback", FeedbackSchema);

module.exports = Feedback;
