const express = require("express");
const router = express.Router();
const cors = require("cors");

router.use(cors());

const fs = require("fs");
const PDFDocument = require("./pdfkit-tables");

//path localhost:5000/api/pdfgenerate/generateworkoutplan
// @desc generate pdf

router.post("/generatemealschedule", async (req, res) => {
  //load cuurent time
  var currentDate = new Date();

  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
  var date = currentDate.getDate();
  var month = currentDate.getMonth(); //Be careful! January is 0 not 1
  var year = currentDate.getFullYear();
  var timestamp =
    year +
    "-" +
    (month + 1) +
    "-" +
    date +
    "-" +
    hours +
    "-" +
    minutes +
    "-" +
    seconds;

  // Load the exericise

  const mealList = req.body.DailyMealList;
  // Create The PDF document
  const doc = new PDFDocument();

  // Pipe the PDF into a patient's file
  var number = Math.floor(Math.random() * 1000 + 1);

  doc.pipe(fs.createWriteStream(`mealschedule_${timestamp}.pdf`));

  // Add the header - https://pspdfkit.com/blog/2019/generate-invoices-pdfkit-node/
  doc
    .fillColor("#444444")
    .fontSize(20)
    .text("Meal Schedule Information.", 110, 57)
    .fontSize(10)
    .text("Fitness Club", 200, 50, { align: "right" })
    .text("291/B,Galle Road", 200, 65, { align: "right" })
    .text("Moratuwa", 200, 80, { align: "right" })
    .moveDown();

  // Create the table - https://www.andronio.me/2017/09/02/pdfkit-tables/
  const table = {
    headers: ["Date", "Meal Name", "Calories", "Proteins", "Fat"],
    rows: [],
  };

  // Add the patients to the table
  for (const meal of mealList) {
    table.rows.push([
      meal.date,
      meal.mealName,
      meal.calories,
      meal.proteins,
      meal.fat,
    ]);
  }

  // Draw the table
  doc.moveDown().table(table, 10, 125, { width: 590 });

  // Finalize the PDF and end the stream
  doc.end();

  res.json("success");
});

//path localhost:5000/api/pdfgenerate/generateworkoutplan
// @desc generate pdf

router.post("/generateworkoutplan", async (req, res) => {
  //load cuurent time
  var currentDate = new Date();

  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
  var date = currentDate.getDate();
  var month = currentDate.getMonth(); //Be careful! January is 0 not 1
  var year = currentDate.getFullYear();
  var timestamp =
    year +
    "-" +
    (month + 1) +
    "-" +
    date +
    "-" +
    hours +
    "-" +
    minutes +
    "-" +
    seconds;

  // Load the exericise

  const ExerciseList = req.body.completedExerciseList;
  // Create The PDF document
  const doc = new PDFDocument();

  // Pipe the PDF into a patient's file
  var number = Math.floor(Math.random() * 1000 + 1);

  doc.pipe(fs.createWriteStream(`workout_${timestamp}.pdf`));

  // Add the header - https://pspdfkit.com/blog/2019/generate-invoices-pdfkit-node/
  doc
    .fillColor("#444444")
    .fontSize(20)
    .text("Workout Information.", 110, 57)
    .fontSize(10)
    .text("Fitness Club", 200, 50, { align: "right" })
    .text("291/B,Galle Road", 200, 65, { align: "right" })
    .text("Moratuwa", 200, 80, { align: "right" })
    .moveDown();

  // Create the table - https://www.andronio.me/2017/09/02/pdfkit-tables/
  const table = {
    headers: [
      "Date",
      "Weight",
      "Height",
      "Exercise",
      "Duration",
      "Burned Calories",
    ],
    rows: [],
  };

  // Add the patients to the table
  for (const exercise of ExerciseList) {
    table.rows.push([
      exercise.date,
      exercise.weight,
      exercise.height,
      exercise.exercise,
      exercise.time,
      exercise.calories,
    ]);
  }

  // Draw the table
  doc.moveDown().table(table, 10, 125, { width: 590 });

  // Finalize the PDF and end the stream
  doc.end();

  res.json("success");
});

module.exports = router;