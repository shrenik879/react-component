const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const User = require("../models/User");

// Become developer
router.post("/become-developer", auth, async (req, res) => {
  const user = await User.findById(req.user.id);

  if (!user) {
    return res.status(404).json({ msg: "User not found" });
  }

  if (user.role === "developer") {
    return res.status(400).json({ msg: "Already a developer" });
  }

  user.role = "developer";
  await user.save();

  res.json({
    msg: "You are now a developer",
    role: user.role,
  });
});

module.exports = router;
