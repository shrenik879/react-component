// const express=require("express");
// const router=express.Router();

// const auth=require("../middleware/auth");
// const roleCheck=require("../middleware/role");
// const authOptional = require("../middleware/authOptional");

// const{
//   createComponent,
//   getApprovedComponents,
//   getMyComponents,
//   getComponentById
// }=require("../controllers/componentCtrl");
// const { deleteComponent } = require("../controllers/componentCtrl");

// router.delete(
//   "/:id",
//   auth,
//   role(["admin"]),   // 🔥 ONLY ADMIN
//   deleteComponent
// );

// //public
// router.get("/",getApprovedComponents);
// // Public: get single component



// //Developer only
// router.post(
//     "/",
//     auth,
//     createComponent
// );

// router.get(
//     "/my",
//     auth,

//     getMyComponents
// );
// router.get("/:id",authOptional, getComponentById);

// module.exports =router;


// const express = require("express");
// const router = express.Router();

// const auth = require("../middleware/auth");
// const roleCheck = require("../middleware/role"); // ✅ correct import
// const authOptional = require("../middleware/authOptional");

// const {
//   createComponent,
//   getApprovedComponents,
//   getMyComponents,
//   getComponentById,
//   deleteComponent,
// } = require("../controllers/componentCtrl");

// /* 🔥 ADMIN ONLY DELETE */
// router.delete(
//   "/:id",
//   auth,
//   roleCheck("admin"),  // ✅ FIX HERE
//   deleteComponent
// );

// /* PUBLIC */
// router.get("/", getApprovedComponents);
// router.get("/:id", authOptional, getComponentById);

// /* AUTH USERS */
// router.post("/", auth, createComponent);
// router.get("/my", auth, getMyComponents);

// module.exports = router;


const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const roleCheck = require("../middleware/role");
const authOptional = require("../middleware/authOptional");

const {
  createComponent,
  getApprovedComponents,
  getMyComponents,
  getComponentById,
  deleteComponent,
  updateComponent,
} = require("../controllers/componentCtrl");

/* 🔥 ADMIN ONLY DELETE */
router.delete(
  "/:id",
  auth,
  
  deleteComponent
);

/* 🔥 MY COMPONENTS — MUST BE ABOVE /:id */
router.get("/my", auth, getMyComponents);
router.put("/:id", auth, updateComponent);

/* PUBLIC */
router.get("/", getApprovedComponents);
router.get("/:id", authOptional, getComponentById);

/* AUTH USERS */
router.post("/", auth, createComponent);

module.exports = router;
