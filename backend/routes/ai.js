// const express = require("express");
// const router = express.Router();

// const auth = require("../middleware/auth");
// const {
//   generateComponent,
//   customizeComponent,
//   explainComponent,
// } = require("../controllers/aiCtrl");

// router.post("/generate", auth, generateComponent);
// router.post("/customize", auth, customizeComponent);
// router.post("/explain", auth, explainComponent);

// module.exports = router;
const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");

const {
  customizeComponent,
  explainComponent,
  generateComponent
} = require("../controllers/aiCtrl");

// 🔐 AI requires login
router.post("/generate", generateComponent);
router.post("/customize", auth, customizeComponent);
router.post("/explain", auth, explainComponent);

module.exports = router;
