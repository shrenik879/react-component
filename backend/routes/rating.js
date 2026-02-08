const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const rateComponent = require("../controllers/ratingCtrl");

router.post("/:componentId", auth, rateComponent);

module.exports = router;
