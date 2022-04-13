const express = require("express");
const router = express.Router();
// const cartItems = require("./cart.routes", filterProduct);

const { resolve } = require("path");

// This is your real test secret API key.
// inside the ("") you need to add your real key or the test key that stripe will give you in their documentation.
const stripe = require("stripe")(process.env.SECRET);

router.use(express.static("."));
router.use(express.json());

router.post("/create-payment-intent", async (req, res) => {
  const calculateOrderAmount = (items) => {
    return 1400;
  };

  const { items } = req.body;
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
  });
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

module.exports = router;
