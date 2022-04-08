const product = require("../allProducts/allProducts");
router.get("/profile", (req, res) => {
  res.json("profile", { product });
});

module.exports = (req, res, next) => {
  // checks if the user is logged in when trying to access a page
  if (!req.session.user) {
    return res
      .status(403)
      .json({ errorMessage: "You must be logged in to see this page" });
  }
  req.user = req.session.user;
  next();
};
