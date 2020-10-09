const express = require("express");
const cors = require("cors");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
const PaymentHistorySchema = require("../../models/PaymentHistory");
const User = require("../../models/User");
const { json } = require("express");

router.use(cors());

//active cart for user

router.post("/", async (req, res) => {

    console.log("Status Code is : " + req.merchant_id );
    console.log("Status Code is : " + req.body.merchant_id );

});



module.exports = router;
