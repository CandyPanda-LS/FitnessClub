const router = require("express").Router();
let Item = require("../../models/ShopItem");

router.get(
    "/ShopItems", [auth],
    (req, res) => {
        Item.find()
            .then((exercises) => res.json(exercises))
            .catch((err) => res.status(400).json("Error: " + err))
    }
)

router.get(
    "/ShopItems:id", [auth],
    (req, res) => {
        Item.findById(req.params.id)
            .then(Item => res.json(Item))
            .catch(err => res.status(400).json('Error: ' + err))
    }
)