const router = require("express").Router();
let Item = require("../../models/InstructorProfile");
//For Image Uploading
const multer = require("multer");
const sharp = require("sharp");

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

  const newItem = new InstructorProfile({ ItemImage });
  //Save Data into the mongo database
  newItem
    .save()
    .then(() => res.json("Item Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});
module.exports = router;
