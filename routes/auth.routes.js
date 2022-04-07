const router = require("express").Router();
const User = require("../models/User.model");
const bcrypt = require("bcrypt");

router.post("/login", async (req, res, next) => {
  try {
    console.log("req.body: ", req.body);
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      throw Error();
    }
    const passwordsMatch = await bcrypt.compare(password, user.password);
    if (!passwordsMatch) {
      throw Error();
    }

    const sessionUser = { username: user.username, _id: user._id };
    req.session.user = sessionUser;
    console.log(req.session);
    return res.json({ message: "Successfully logged in!", user: sessionUser });
  } catch (err) {
    return res.status(400).json({
      errorMessage: "Something went wrong - username and password don't match",
    });
  }
});

router.post("/register", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const userAlreadyExists = await User.findOne({ username });
    if (userAlreadyExists) {
      return res.status(400).json({
        errorMessage: "Username already exists, please try a different one!",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
    const user = await new User({ username, password: passwordHash });
    await user.save();

    return res.json({ message: "Successfully signed up user" });
  } catch (err) {
    return res.status(400).json({ errorMessage: "Something went wrong!" });
  }
});

router.post("/logout", async (req, res, next) => {

  req.session.destroy((err) => {
    if (err) next(err);
    return res.json({ message: "Successfully logged out!" });
  });
});

module.exports = router;
