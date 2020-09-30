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
app.use("/api/admins", require("./routes/api/admins"));
app.use("/api/authadmin", require("./routes/api/authadmin"));
app.use("/api/authinstructor", require("./routes/api/authinstructor"));

//-------------------Lasal---------------------
app.use("/api/shop", require("./routes/api/shop"));
app.use("/api/cart", require("./routes/api/addtocart"));

//-------------------Dilmi---------------------
app.use("/api/userprofile", require("./routes/api/userprofile"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/users", require("./routes/api/users"));

//-------------------Ayodya---------------------
app.use("/api/advertisement", require("./routes/api/advertisement"));

//-------------------Rajindu---------------------
app.use("/api/instructors", require("./routes/api/instructors"));

//------------------Chamodi-----------------------
app.use("/api/packages", require("./routes/api/packages"));
app.use("/api/notices", require("./routes/api/notices"));
app.use("/packageImages", express.static("./packageImages"));

//------------------Dilumi------------------------
app.use("/api/inventory", require("./routes/api/inventory"));

//------------------Jayani------------------------
app.use("/api/fitnessUpdate", require("./routes/api/fitnessUpdate"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
