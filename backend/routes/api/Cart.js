const express = require("express");
const cors = require("cors");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
const Cart = require("../../models/Cart");
const User = require("../../models/User");
const { json } = require("express");

router.use(cors());

router.post("/", auth, async (req, res) => {
  const activated = "active";

  //build profile object
  const profileFields = {};
  profileFields.user = req.user.id;
  if (activated) profileFields.activated = activated;

  try {
    let cart = await Cart.findOne({ user: req.user.id });

    if (cart) {
      //UPDATE
      cart = await Cart.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true }
      );

      return res.json(cart);
    }

    //Create
    cart = new Cart(profileFields);

    await cart.save();
    res.json(cart); //return the profile
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route  PUT  api/cart/addtocart
//@desc  Add items to cart list
//@access private
//@author Lasal

router.put("/addtocart", auth, async (req, res) => {
  const { ItemName, ItemPrice, ItemImage, quantity } = req.body;

  const newCartList = {
    ItemName,
    ItemPrice,
    ItemImage,
    quantity,
  };

  try {
    const cart = await Cart.findOne({ user: req.user.id });

    cart.cartList.unshift(newCartList);

    await cart.save();

    res.json(cart);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
