const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const advertiesement = require('../../models/advertiesement');
const cors = require('cors');

const path = require('path'); //for seting path
const dirPath = path.join(
  __dirname,
  '../../../frontend/fitness-club/public/uploads'
); //for seting path

const app = express();

app.use(fileUpload()); //for image uploading

router.use(cors());

//@route  POST api/advertiesement/create/
//@desc   Advertiesement create into the database
//@access Private
//@author Ayodya

router.post('/create', (req, res) => {
  if (req.files == null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const file = req.files.file;
  file.mv(`${dirPath}/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    const Title = req.body.Title;
    const Description = req.body.Description;
    const advertiesementimage = file.name;

    const newadvertiesement = new advertiesement({
      Title,
      Description,
      advertiesementimage,
    });

    //Save Data into the mongo database

    newadvertiesement
      .save()
      .then(() => res.json('advertiesement Added'))
      .catch((err) => res.status(400).json('Error: ' + err));
  });
});

//@route  DELETE api/instructor/advertiesement
//@desc  Delete advertiesement
//@access Private
//@author Ayodya

router.delete('/', async (req, res) => {
  try {
    //Remove Workout
    await advertiesement.findOneAndRemove({ _id: req.body.id });

    res.json({ msg: 'advertiesement Deleted' });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
advertiese;
