const express = require("express");
const fileUpload = require("express-fileupload");
const router = require("express").Router();
let Fitnessupdate = require("../../models/FitnessUpdate");

//For Image Uploading
const path = require("path"); //for seting path
const dirPath = path.join(
  __dirname,
  "../../../frontend/fitness-club/public/uploads/fitnessUpdates"
); //for seting path

const app = express();
const cors = require("cors");
router.use(cors());

app.use(fileUpload()); //for image uploading

// @route         GET /fitnessUpdate
// @description   get Fitnessupdate Items
// @access        Private
router.get("/", async (req, res) => {
  Fitnessupdate.find()
    .then((items) => {
      res.json(items);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

//@route  GET api/fitnessupdate/:id
//@desc   Get one Item from the database
//@access Private

router.get("/:id", (req, res) => {
  Fitnessupdate.findById(req.params.id)
    .then((item) => res.json(item))
    .catch((err) => res.status(400).json("Error: " + err));
});

//@route  POST api/Fitnessupdate/additems
//@desc   Add Items into the database
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

    const topic = req.body.topic;
    const description = req.body.description;
    const link = req.body.link;
    const image = file.name;

    const newItem = new Fitnessupdate({
      topic,
      description,
      link,
      image,
    });

    //Save Data into the mongo database

    newItem
      .save()
      .then(() => res.json("Added"))
      .catch((err) => res.status(400).json("Error: " + err));
  });
});

//@route  DELETE api/Fitnessupdate/remove
//@desc  Delete Item
//@access Private
//@author Dilumi

router.delete("/removepost/:id", async (req, res) => {
  try {
    //GET remove index
    Fitnessupdate.findByIdAndDelete(req.params.id)
      .then(() => {
        res.json("Deleted");
      })
      .catch((err) => res.status(400).json("Error: " + err));
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route  Update api/fitnessUpdate
//@desc  update Item
//@access Private
//@author Dilumi

router.post("/updatearticle/:id", async (req, res) => {
  try {
    //if there is no image
    if (req.files == null) {
      Fitnessupdate.findByIdAndUpdate(req.params.id)
        .then((article) => {
          article.topic = req.body.topic;
          article.description = req.body.description;
          article.link = req.body.link;

          article
            .save()
            .then(() => res.json("Article updated!"))
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

        Fitnessupdate.findByIdAndUpdate(req.params.id)
          .then((article) => {
            article.topic = req.body.topic;
            article.description = req.body.description;
            article.link = req.body.link;
            article.image = file.name;

            article
              .save()
              .then(() => res.json("Article updated!"))
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
