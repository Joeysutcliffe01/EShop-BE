const router = require("express").Router();
const Product = require("../models/Product.model");
const Cart = require("../models/Cart.models");

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

router.post("/cart", async (req, res) => {
  console.log(req.body, "i am the body--------------");

  let cartItem = {
    title: req.body.title,
    imageUrl: req.body.imageUrl,
    description: req.body.description,
    price: req.body.price,
    productId: req.body.productId,
    owner: req.body.owner,
  };

  let cartResponse = await Cart.create(cartItem);

  // res.status(400).json({
  //     errorMessage: "Error in adding products from server! " + err.message,
  //   });

  console.log(cartResponse);
});

module.exports = router;
