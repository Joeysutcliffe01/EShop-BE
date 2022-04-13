const router = require("express").Router();
const csrfMiddleware = require("../middleware/csrfMiddleware");
const authRoutes = require("./auth.routes");

/* GET home page */
router.get("/", (req, res, next) => {
  console.log(req.session, "req session ---------------============+");
  res.json("All good in here");
});

// csrftoken
router.get("/getCsrfToken", csrfMiddleware, (req, res, next) => {
  res.json({ csrfToken: req.csrfToken() });
});

router.use("/auth", authRoutes);

router.use(require("./products.routes"));
router.use(require("./cart.routes"));
module.exports = router;
