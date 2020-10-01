const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },

  //@desc gym package
  //@author Chamodi
  package: {
    type: String,
  },
  //@author Senura
  currentWeight: {
    type: String,
  },
  //@author Senura
  currentHeight: {
    type: String,
  },
  //@desc assigned instructor
  instructor: { type: String },
  //@desc workout plan
  workoutplan: [
    {
      exercise: { type: String },
    },
  ],
  //@desc meal plan
  mealplan: {
    meal: { type: String },
  },
  //@desc daily meal list
  //@author Senura
  dailymeallist: [
    {
      mealName: { type: String },
      calories: { type: String },
      proteins: { type: String },
      fat: { type: String },
      date: { type: Date },
    },
  ],

  //@desc completed workout list
  //@author Senura
  completedWorkoutList: [
    {
      weight: { type: String },
      height: { type: String },
      exercise: { type: String },
      time: { type: String },
      calories: { type: String },
      date: { type: Date },
    },
  ],
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
