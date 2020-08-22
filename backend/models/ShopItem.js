const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ShopItemSchema = new Schema({
    //@author Lasal
    ItemName: {
        type: String,
        required: true,

    },
    ItemPrice: {
        type: String,
        required: true,
    },
    ItemDescriprion: {
        type: String,
    },

    ItemImage:{
        type: Buffer,
        required: true,
    }

});

const ShopItem = mongoose.model("ShopItem", ShopItemSchema);
module.exports = ShopItem;