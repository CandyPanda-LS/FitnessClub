const router = require("express").Router();
let Item = require("../../models/ShopItem");

router.get("/ShopItems", (req, res) => {
  Item.find()
    .then((ShopItems) => res.json(ShopItems))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/ShopItems:id", (req, res) => {
  Item.findById(req.params.id)
    .then((Item) => res.json(Item))
    .catch((err) => res.status(400).json("Error: " + err));
});
