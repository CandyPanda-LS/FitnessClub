const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 5000;

require("dotenv").config();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

const uri = process.env.ATLAS_URI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const Users = require("./routes/Users");

app.use("/Users", Users);

app.listen(port, () => {
  console.log("Server is running on port :" + port);
});
