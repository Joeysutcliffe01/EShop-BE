const router = require("express").Router();
const Product = require("../models/Product.model");

router.get("/products", async (req, res, next) => {
  try {
    const products = await Product.find();
    console.log("here are the products", products);
    res.json({
      products,
    });
  } catch (err) {
    res.status(400).json({
      errorMessage: "Error in fetching products from server! " + err.message,
    });
  }
});

router.post("/products", async (req, res, next) => {
  try {
    console.log(req.body);

    const { title, price, description, imageUrl } = req.body;
    const products = await Product.create({
      title,
      price,
      description,
      imageUrl,
    });

    console.log("You added a product", products);
    res.json({
      products,
    });
  } catch (err) {
    res.status(400).json({
      errorMessage: "Error in adding products from server! " + err.message,
    });
  }
});

module.exports = router;
