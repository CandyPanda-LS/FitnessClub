const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const Payment = require("../../models/Payment");


const app = express();
const cors = require("cors");
router.use(cors());

// @route         POST /api/addpayment
// @description   add user payment
// @access        public
router.post("/", (req,res)=>{


    const {userProfile,OrderID,items,amount,firstName,lastName,email,phone,address} = req.body;

    const paymentStatus = "incompleted";

    const newAddPayment = new Payment({

        userProfile,
        OrderID,
        items,
        amount,
        firstName,
        lastName,
        email,
        phone,
        address,
        paymentStatus

    })

    newAddPayment.save().then(()=> res.json("Add Payment Success")).catch((err)=>res.status(400).json("Error: " + err))

})

module.exports = router;

