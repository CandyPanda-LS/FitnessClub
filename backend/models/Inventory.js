const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InventorySchema = new Schema({
  //@author Lasal
  ItemType: {
    type: String,
  },
  ItemBrand: {
    type: String,
  },
  ManufacturelDate: {
    type: String,
  },
  ServiceDate: {
    type: Date,
  },
  Warranty: {
    type: String,
  },
  PurchasedDate: {
    type: Date,
  },
  ItemImage: {
    type: String,
    // required: true,
  },
});

const Inventory = mongoose.model("Inventory", InventorySchema);
module.exports = Inventory;
