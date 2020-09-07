const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const advertiesementSchema = new Schema({
  Title: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  advertiesementimage: {
    type: String,
    required: true,
  },
});

const Advertiesement = mongoose.model('Advertiesement', advertiesementSchema);
module.exports = Advertiesement;
