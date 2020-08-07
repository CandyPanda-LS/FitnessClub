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
    ItemColors: [{
        Color1: {
            type:String,
        },
        Color2: {
            type:String,
        },
        Color3: {
            type:String,
        },
    }],

});

const ShopItem = mongoose.model("ShopItem", ShopItemSchema);
module.exports = ShopItem;