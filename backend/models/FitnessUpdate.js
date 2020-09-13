const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FitnessupdateSchema = new Schema({
  //@author Jayani
  topic: {
    type: String,
  },
  description: {
    type: String,
  },
  link: {
    type: String,
  },
  image: {
    type: String,
    // required: true,
  },
});

const FitnessUpdate = mongoose.model('FitnessUpdate', FitnessUpdateSchema);
module.exports = Fitnessupdate;
