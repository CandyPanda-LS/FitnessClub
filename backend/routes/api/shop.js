const router = require("express").Router();
let Item = require("../../models/ShopItem");

//For Image Uploading
const multer = require("multer");
const sharp = require("sharp");


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

//For Image Uploading(Getting image)
const upload = multer({
  limits: {
    fileSize: 4000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error("File is not supported"));
    }
    cb(undefined, true);
  },
});

router.post("/additems", upload.single("ItemImage"), async (req, res) => {
  // image configuration
  const ItemImage = await sharp(req.file.buffer)
    .resize({ width: 250, height: 250 })
    .png()
    .toBuffer();

  const ItemName = req.body.ItemName;
  const ItemPrice = req.body.ItemPrice;
  const ItemDescriprion = req.body.ItemDescriprion;


  const newItem = new Item({ ItemName, ItemPrice, ItemDescriprion, ItemImage });

  //Save Data into the mongo database

  newItem
    .save()
    .then(() => res.json("Item Added"))
    .catch((err) => res.status(400).json("Error: " + err));
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
