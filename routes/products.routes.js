const router = require("express").Router();
const Product = require("../models/Product.model");


router.get("/products", async (req, res, next) => {
  try {
    const products = await Product.find();
    console.log("here are the products");
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
    // console.log(req.body);

    const { title, price, description, imageUrl } = req.body;
    const products = await Product.create({
      title,
      price,
      description,
      imageUrl,
    });

    console.log("You added a product");
    res.json({
      products,
    });
  } catch (err) {
    res.status(400).json({
      errorMessage: "Error in adding products from server! " + err.message,
    });
  }
});

router.get("/product/:productId", async (req, res) => {
  console.log("Here are the params----------", req.params);

  const { productId } = req.params;

  // console.log("im the product id ----------------------------", productId);
  const product = await Product.findById(productId);

  res.json({
    product,
  });
  // console.log("im the product ----------------------------", product);
});



module.exports = router;
