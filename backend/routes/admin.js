const express=require("express");
const router=express.Router();

const auth=require("../middleware/auth");
const roleCheck=require("../middleware/role");

const{ 
  getPendingComponents,
  approveComponent,
  rejectComponent,
}=require("../controllers/adminCtrl");

router.get(
    "/components/pending",
    auth,
    roleCheck("admin"),
    getPendingComponents
);

router.patch(
    "/components/:id/approve",
    auth,
    roleCheck("admin"),
    approveComponent
);

router.patch(
    "/components/:id/reject",
    auth,
    roleCheck('admin'),
    rejectComponent
);

module.exports=router;