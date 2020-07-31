const express = require("express");
const cors = require("cors");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
const Profile = require("../../models/Profile");
const User = require("../../models/User");
const { json } = require("express");

router.use(cors());

//@route  GET api/profile/me
//@desc   Get current users profile
//@access Private
//to protect auth add as the second parameter
router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate("user", ["firstName", "lastName"]);

    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route  POST api/profile
//@desc   Create or Update a User Profile (Select a gym package package)
//@access Private
//@author Chamodi

router.post(
  "/",

  [auth, [check("package", "package is required").not().isEmpty()]],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty) {
      return res.status(400).json({ errors: errors });
    }

    const { package } = req.body;

    //build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (package) profileFields.package = package;

    try {
      let profile = await Profile.findOne({ user: req.user.id });

      if (profile) {
        //UPDATE
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );

        return res.json(profile);
      }

      //Create
      profile = new Profile(profileFields);

      await profile.save();
      res.json(profile); //return the profile
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// //@route  GET  api/profile
// //@desc  GET All Profile
// //@access Public

// router.get("/", async (req, res) => {
//   try {
//     const profiles = await Profile.find().populate("user", ["name", "avatar"]);
//     res.json(profiles);
//   } catch (err) {
//     console.log(err.message);
//     res.status(500).send("Server Error");
//   }
// });

// //@route  GET  api/profile/user/:user_id
// //@desc  GET  Profile by user id
// //@access Public

// router.get("/user/:user_id", async (req, res) => {
//   try {
//     const profile = await Profile.findOne({
//       user: req.params.user_id,
//     }).populate("user", ["name", "avatar"]);

//     if (!profile) return res.status(400).json({ msg: "Profile Not Found" });
//     res.json(profile);
//   } catch (err) {
//     if (err.kind == "ObjectId") {
//       return res.status(400).json({ msg: "Profile Not Found" });
//     }
//     console.log(err.message);
//     res.status(500).send("Server Error");
//   }
// });

//@route  DELETE api/profile
//@desc  Delete profile,user & posts
//@access Private
//@author Chamodi

router.delete("/", auth, async (req, res) => {
  try {
    //todo - remove users posts
    //Remove Profile
    await Profile.findOneAndRemove({ user: req.user.id });
    //Remove user
    //await User.findOneAndRemove({ _id: req.user.id });
    res.json({ msg: "Profile Deleted" });
    //res.json({ msg: "User Deleted" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

//@route  PUT  api/profile/addmeallist
//@desc  Add daily meallist
//@access private
//@author Senura

router.put(
  "/addmeallist",
  [
    auth,

    [
      check("mealName", "mealName is required").not().isEmpty(),
      check("calories", "calories is required").not().isEmpty(),
      check("proteins", "proteins  is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { mealName, calories, proteins, fat, date } = req.body;

    const newMealList = {
      mealName,
      calories,
      proteins,
      fat,
      date,
    };

    try {
      const profile = await Profile.findOne({ user: req.user.id });

      profile.dailymeallist.unshift(newMealList);

      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

//@route  DELETE  api/profile/dailymeallist/:dailymeal_id
//@desc  delete profile daily meal item
//@access private
//@author senura

router.delete("/dailymeallist/:dailymeal_id", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });

    //GET remove index

    const removeIndex = profile.dailymeallist
      .map((item) => item.id)
      .indexOf(req.params.dailymeal_id);

    profile.dailymeallist.splice(removeIndex, 1);

    await profile.save();

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route  PUT  api/profile/addmeallist
//@desc  Add daily meallist
//@access private
//@author Senura

router.put(
  "/addcompletedexerciselist",
  [
    auth,

    [
      check("weight", "mealName is required").not().isEmpty(),
      check("height", "calories is required").not().isEmpty(),
      check("exercise", "proteins  is required").not().isEmpty(),
      check("time", "proteins  is required").not().isEmpty(),
      check("calories", "proteins  is required").not().isEmpty(),
      check("date", "proteins  is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { weight, height, exercise, time, calories, date } = req.body;

    const newCompletedExerciseList = {
      weight,
      height,
      exercise,
      time,
      calories,
      date,
    };

    try {
      const profile = await Profile.findOne({ user: req.user.id });

      profile.completedWorkoutList.unshift(newCompletedExerciseList);

      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

//@route  DELETE  api/profile/dailyexerciselist/:dailyexercise_id
//@desc  Add profile completed Workout
//@access private
//@author Senura

router.delete(
  "/dailyexerciselist/:dailyexercise_id",
  auth,
  async (req, res) => {
    try {
      const profile = await Profile.findOne({ user: req.user.id });

      //GET remove index

      const removeIndex = profile.completedWorkoutList
        .map((item) => item.id)
        .indexOf(req.params.dailyexercise_id);

      profile.completedWorkoutList.splice(removeIndex, 1);

      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
