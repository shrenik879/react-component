const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const toggleLike = require("../controllers/likeCtrl");

router.post("/:componentId", auth, toggleLike);

module.exports = router;
