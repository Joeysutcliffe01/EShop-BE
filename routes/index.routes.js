const router = require("express").Router();
const csrfMiddleware = require("../middleware/csrfMiddleware");
const authRoutes = require("./auth.routes");

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// csrftoken
router.get("/getCsrfToken", csrfMiddleware, (req, res, next) => {
  res.json({ csrfToken: req.csrfToken() });
});

router.use("/auth", authRoutes);
module.exports = router;
