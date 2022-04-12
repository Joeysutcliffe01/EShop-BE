const router = require("express").Router();
const Cart = require("../models/Cart.models");

router.post("/cart", async (req, res) => {
  console.log(req.body, "cartpage --------------");

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
router.get("/allcart/:userid", async (req, res) => {
  let cart = await Cart.find();

  let filterProduct = cart.filter((item) => {
    return item.owner == req.params.userid;
  });
  console.log(filterProduct, "filterproduct");
  res.status(200).json({ filterProduct });
});

router.delete("/", async (req, res) => {
  try {
    console.log(req.body.id);
    console.log(req.body);
    await Cart.findByIdAndDelete(req.body.id);
    return res.status(200).json({ success: true, msg: "Product Deleted" });
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
