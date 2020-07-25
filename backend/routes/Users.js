const express = require("express");
const users = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
<<<<<<< HEAD
const User = require("../models/User");
users.use(cors());

process.env.SECRET_KEY = "secret";

users.post("/register", (req, res) => {
  const today = new Date();
  const userData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    mobileNo: req.body.mobileNo,
    address: req.body.address,
    gender: req.body.email,
    password: req.body.password,
    created: today,
  };

  User.findOne({
    email: req.body.email,
  })

    .then((user) => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash;
          User.create(userData);
        });
      }
    })
    .then((user) => {
      res.json({ status: user.email + "registered!" });
    })
    .catch((err) => {
      res.send("error:" + err);
    });

  users.post("/login", (req, res) => {
    User.findOne({
      email: req.body.email,
    })
=======

const User = require("../models/User");
users.use(cors());

process.env.SECRET_KEY = "secret";

users.post("/register", (req, res) => {
  const today = new Date();
  const userData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    mobileNo: req.body.mobileNo,
    address: req.body.address,
    gender: req.body.email,
    password: req.body.password,
    created: today,
  };

  User.findOne({
    email: req.body.email,
  })

    .then((user) => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash;
          User.create(userData)
            .then((user) => {
              res.json({ status: user.email + "registered!" });
            })
            .catch((err) => {
              res.send("error:" + err);
            });
        });
      } else {
        res.json({ error: "User already exists" });
      }
    })
    .catch((err) => {
      res.send("error:" + err);
    });

  users.post("/login", (req, res) => {
    User.findOne({
      email: req.body.email,
    })
>>>>>>> 6481a8b066b02d12a2b9d6a6bae5df64979484fa
      .then((user) => {
        if (user) {
          if (bcrypt.compareSync(req.body.password, user.password)) {
            const payload = {
              id: user.id,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
            };
            let token = jwt.sign(payload, process.env.SECRET_KEY, {
              expiresIn: 1440,
            });
            res.send(token);
          } else {
            res.json({ error: "User does not exist" });
          }
        } else {
          res.json({ error: "User does not exist" });
        }
      })
      .catch((err) => {
        res.send("error:" + err);
      });
    users.get("/profile", (req, res) => {
      var decoded = jwt.verify(
        req.headers["authorization"],
        process.env.SECRET_KEY
      );

      User.findOne({
        id: decoded.id,
      })
<<<<<<< HEAD

        .then((user) => {
          if (user) {
            res.json(user);
          } else {
            res.send("User does not exist");
          }
        })
        .catch((err) => {
          res.send("error :" + err);
        });
    });
  });
});
=======

        .then((user) => {
          if (user) {
            res.json(user);
          } else {
            res.send("User does not exist");
          }
        })
        .catch((err) => {
          res.send("error :" + err);
        });
    });
  });
});

module.exports = users;
>>>>>>> 6481a8b066b02d12a2b9d6a6bae5df64979484fa
