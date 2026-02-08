const express = require("express");
const router = express.Router();
const { changePassword } = require("../controllers/authCtrl");
const { register, login} = require("../controllers/authCtrl");
const auth = require("../middleware/auth");

router.post("/register", register);
router.post("/login", login);
router.post("/change-password", auth, changePassword);

module.exports = router;


