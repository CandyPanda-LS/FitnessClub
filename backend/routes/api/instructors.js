const router = require("express").Router();
let Instructor = require("../../models/Instructor");
const { Router } = require("express");

//Handle incoming HTTP GET requests under /instructor url
router.route("/").get((req, res) => {
  //(find)mongoose method that get the list of all the instructors from the mongodb atlas database
  Instructor.find()
    .then((instructors) => res.json(instructors))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Handle incoming HTTP POST requests
router.route("/add").post((req, res) => {
  const instructorID = req.body.instructorID;
  const name = req.body.name;
  const dob = Date.parse(req.body.dob);
  const gender = req.body.gender;
  const address = req.body.address;
  const phone = Number(req.body.phone);
  const email = req.body.email;
  const password = req.body.password;

  const newInstructor = new Instructor({
    instructorID,
    name,
    dob,
    gender,
    address,
    phone,
    email,
    password,
  });

  //Save the data into the mongo databse
  newInstructor
    .save()
    .then(() => res.json("Instructor added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//get details of a single instructor
router.route("/:id").get((req, res) => {
  Instructor.findById(req.params.id)
    .then((instructor) => res.json(instructor))
    .catch((err) => res.status(400).json("Error: " + err));
});

//delete an instructor
router.route("/:id").delete((req, res) => {
  Instructor.findByIdAndDelete(req.params.id)
    .then(() => res.json("Instructor deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//update instructor details
router.route("/update/:id").put((req, res) => {
  Instructor.findByIdAndUpdate(req.params.id)
    .then((instructor) => {
      instructor.instructorID = req.body.instructorID;
      instructor.name = req.body.name;
      instructor.dob = Date.parse(req.body.dob);
      instructor.gender = req.body.gender;
      instructor.address = req.body.address;
      instructor.phone = Number(req.body.phone);
      instructor.email = req.body.email;

      instructor
        .save()
        .then(() => res.json("Instructor Updated"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
