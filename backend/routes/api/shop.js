const express = require("express");
const fileUpload = require("express-fileupload");
const router = require("express").Router();
let Item = require("../../models/ShopItem");

//For Image Uploading
const path = require("path"); //for seting path
const dirPath = path.join(
  __dirname,
  "../../../frontend/fitness-club/public/uploads/shop"
); //for seting path

const app = express();
const cors = require("cors");
router.use(cors());

app.use(fileUpload()); //for image uploading

// @route         GET /shop
// @description   get Shop Items
// @access        Private
router.get("/", async (req, res) => {
  Item.find()
    .then((items) => {
      res.json(items);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

//@route  GET api/shop/:id
//@desc   Get one Item from the database
//@access Private

router.get("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then((Item) => res.json(Item))
    .catch((err) => res.status(400).json("Error: " + err));
});

//@route  POST api/shop/additems
//@desc   Add Items into the database
//@access Private
//to protect auth add as the second parameter

router.post("/additems", async (req, res) => {
  if (req.files == null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;
  file.mv(`${dirPath}/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    const ItemName = req.body.ItemName;
    const ItemPrice = req.body.ItemPrice;
    const ItemDescriprion = req.body.ItemDescriprion;
    const ItemImage = file.name;

    const newItem = new Item({
      ItemName,
      ItemPrice,
      ItemDescriprion,
      ItemImage,
    });

    //Save Data into the mongo database

    newItem
      .save()
      .then(() => res.json("Item Added"))
      .catch((err) => res.status(400).json("Error: " + err));
  });
});

router.post("/updateItems", upload.single("ItemImage"), async (req, res) => {
  // image configuration
  const ItemImage = await sharp(req.file.buffer)
    .resize({ width: 250, height: 250 })
    .png()
    .toBuffer();

  const ItemName = req.body.ItemName;
  const ItemPrice = req.body.ItemPrice;
  const ItemDescriprion = req.body.ItemDescriprion;

  

});



module.exports = router;
