const express = require("express");
const fileUpload = require("express-fileupload");
const router = require("express").Router();
let Inventory = require("../../models/Inventory");

//For Image Uploading
const path = require("path"); //for seting path
const dirPath = path.join(
  __dirname,
  "../../../frontend/fitness-club/public/uploads/inventory"
); //for seting path

const app = express();
const cors = require("cors");
router.use(cors());

app.use(fileUpload()); //for image uploading

// @route         GET /shop
// @description   get Inventory Items
// @access        Private
router.get("/", async (req, res) => {
  Inventory.find()
    .then((items) => {
      res.json(items);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

//@route  GET api/shop/:id
//@desc   Get one Item from the database
//@access Private

router.get("/:id", (req, res) => {
  Inventory.findById(req.params.id)
    .then((item) => res.json(item))
    .catch((err) => res.status(400).json("Error: " + err));
});

//@route  POST api/inventory/additems
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

    const ItemType = req.body.ItemType;
    const ItemBrand = req.body.ItemBrand;
    const ManufacturelDate = req.body.ManufacturelDate;
    const ServiceDate = req.body.ServiceDate;
    const Warranty = req.body.Warranty;
    const PurchasedDate = req.body.PurchasedDate;
    const ItemImage = file.name;

    const newItem = new Inventory({
      ItemType,
      ItemBrand,
      ManufacturelDate,
      ServiceDate,
      Warranty,
      PurchasedDate,
      ItemImage,
    });

    //Save Data into the mongo database

    newItem
      .save()
      .then(() => res.json("Item Added"))
      .catch((err) => res.status(400).json("Error: " + err));
  });
});

//@route  DELETE api/inventory/remove
//@desc  Delete Item
//@access Private
//@author Dilumi

router.delete("/removeItem/:id", async (req, res) => {
  try {
    //GET remove index
    Inventory.findByIdAndDelete(req.params.id)
      .then(() => {
        res.json("Item Deleted");
      })
      .catch((err) => res.status(400).json("Error: " + err));
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route  Update api/shop/update
//@desc  update Item
//@access Private
//@author Dilumi

router.post("/updateItem/:id", async (req, res) => {
  try {
    //if there is no image
    if (req.files == null) {
      Inventory.findByIdAndUpdate(req.params.id)
        .then((item) => {
          item.ItemType = req.body.ItemType;
          item.ItemBrand = req.body.ItemBrand;
          item.ManufacturelDate = req.body.ManufacturelDate;
          item.ServiceDate = req.body.ServiceDate;
          item.Warranty = req.body.Warranty;
          item.PurchasedDate = req.body.PurchasedDate;

          item
            .save()
            .then(() => res.json("Item updated!"))
            .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("Error: " + err));
    }
    //if there is a image
    else {
      const file = req.files.file;
      file.mv(`${dirPath}/${file.name}`, (err) => {
        if (err) {
          console.error(err);
          return res.status(500).send(err);
        }

        Inventory.findByIdAndUpdate(req.params.id)
          .then((item) => {
            item.ItemType = req.body.ItemType;
            item.ItemBrand = req.body.ItemBrand;
            item.ManufacturelDate = req.body.ManufacturelDate;
            item.ServiceDate = req.body.ServiceDate;
            item.Warranty = req.body.Warranty;
            item.PurchasedDate = req.body.PurchasedDate;
            item.ItemImage = file.name;

            item
              .save()
              .then(() => res.json("Item updated!"))
              .catch((err) => res.status(400).json("Error: " + err));
          })
          .catch((err) => res.status(400).json("Error: " + err));
      });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
