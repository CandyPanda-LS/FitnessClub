const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path");

const app = express();
app.use(fileUpload());

//Connect Database
connectDB();

//Using Cors
app.use(cors());

//Init Middleware( include  bodyparser through express)
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("Api Running"));

//Define Routes

//-------------------Senura---------------------
app.use("/api/instructor/meal", require("./routes/api/meal"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/instructor/workout", require("./routes/api/Workout"));

//-------------------Lasal---------------------
app.use("/api/shop", require("./routes/api/shop"));

//-------------------Dilmi---------------------
app.use("/api/userprofile", require("./routes/api/userprofile"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/users", require("./routes/api/users"));

//-------------------Ayodya---------------------
app.use("/api/advertisement", require("./routes/api/advertisement"));

//-------------------Rajindu---------------------
app.use("/api/instructors", require("./routes/api/instructors"));
// app.use("/api/images", require("./routes/api/images"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
