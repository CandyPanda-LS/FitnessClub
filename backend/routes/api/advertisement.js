const express = require("express");
const fileUpload = require("express-fileupload");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
const Advertisement = require("../../models/Advertisement");
const cors = require("cors");
const path = require("path"); //for seting path
const dirPath = path.join(
  __dirname,
  "../../../frontend/fitness-club/public/uploads"
); //for seting path

const app = express();

app.use(fileUpload()); //for image uploading

router.use(cors());

//test path
router.get("/path", (req, res) => {
  console.log("path is  = " + dirPath);
});

//@route  POST api/advertisement/
//@desc   Add advertisement into the database
//@access Private
//to protect auth add as the second parameter
router.post("/", async (req, res) => {
  if (req.files == null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;
  file.mv(`${dirPath}/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    const advertiesementImage = file.name;
    const title = req.body.title;
    const description = req.body.description;

    const newAdvertisement = new Advertisement({
      title,
      description,
      advertiesementImage,
    });

    //Save Data into the mongo database

    newAdvertisement
      .save()
      .then(() => res.json("Advertisement Added"))
      .catch((err) => res.status(400).json("Error: " + err));
  });
});

// @route         GET /advertiesement
// @description   get advertiesement
// @access        public
router.get("/", async (req, res) => {
  Advertisement.find()
    .then((post) => {
      res.json(post);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

// //@route  DELETE api/advertiesement
// //@desc  Delete Item
// //@access Private
// //@author Ayodya
router.delete("/:id", async (req, res) => {
  Advertisement.findByIdAndDelete(req.params.id)
    .then(() => {
      res.json("Advertisement Deleted");
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
