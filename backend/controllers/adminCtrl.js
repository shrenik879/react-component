// const Component = require("../models/component");


// exports.getPendingComponents=async(req,res)=>{
//     const components=await Component.find({status: "pending"});
//     res.json(components)
// };

// exports.approveComponent = async(req,res) =>{
//     const component = await Component.findByIdAndUpdate(
//         req.params.id,
//         {status:"approved"},
//         {new:true}
//     );
//     res.json({msg:"component approved",component});
// };

// exports.rejectComponent = async (req,res) =>{
//     const component= await Component.findByIdAndUpdate(
//         req.params.id,
//         {status: "rejected"},
//         {new: true}
//     );
//     res.json({msg: "component rejected",component});
// };

// const Component = require("../models/component");

// /* ================= GET PENDING COMPONENTS ================= */
// /*
//   Shows:
//   1. New components (status: pending)
//   2. Edited components (draftCode exists)
// */
// exports.getPendingComponents = async (req, res) => {
//   try {
//     const components = await Component.find({
//       $or: [
//         { status: "pending" },        // new submissions
//         { draftCode: { $ne: null } }, // edited submissions
//       ],
//     }).sort({ createdAt: -1 });

//     res.json(components);
//   } catch (err) {
//     console.error("getPendingComponents error:", err);
//     res.status(500).json({ msg: "Server error" });
//   }
// };

// /* ================= APPROVE COMPONENT ================= */
// /*
//   If:
//   - New component → approve normally
//   - Edited component → replace live code with draftCode
// */
// // exports.approveComponent = async (req, res) => {
// //   try {
// //     const component = await Component.findById(req.params.id);

// //     if (!component) {
// //       return res.status(404).json({ msg: "Component not found" });
// //     }

// //     // 🔥 IF THIS IS AN EDIT
// //     if (component.draftCode) {
// //       component.code = component.draftCode; // update live version
// //       component.draftCode = null;            // clear draft
// //     }

// //     component.status = "approved";
// //     await component.save();

// //     res.json({
// //       msg: "Component approved successfully",
// //       component,
// //     });
// //   } catch (err) {
// //     console.error("approveComponent error:", err);
// //     res.status(500).json({ msg: "Server error" });
// //   }
// // };

// // exports.approveComponent = async (req, res) => {
// //   const component = await Component.findById(req.params.id);

// //   if (!component) {
// //     return res.status(404).json({ msg: "Component not found" });
// //   }

// //   // 🔥 APPLY DRAFT TO LIVE
// //   if (component.draftCode) {
// //     component.code = component.draftCode;
// //     component.draftCode = null;
// //   }

// //   component.status = "approved";
// //   await component.save();

// //   res.json({
// //     msg: "Component approved",
// //     component,
// //   });
// // };

// exports.approveComponent = async (req, res) => {
//   const component = await Component.findById(req.params.id);

//   component.code = component.draftCode; // ✅ promote edit
//   component.draftCode = null;           // ✅ clear draft
//   component.status = "approved";

//   await component.save();

//   res.json({ msg: "Component approved", component });
// };

// /* ================= REJECT COMPONENT ================= */
// /*
//   If:
//   - New component → mark rejected
//   - Edited component → discard draft, keep old approved code
// */
// // exports.rejectComponent = async (req, res) => {
// //   try {
// //     const component = await Component.findById(req.params.id);

// //     if (!component) {
// //       return res.status(404).json({ msg: "Component not found" });
// //     }

// //     if (component.draftCode) {
// //       // 🔥 reject edit only
// //       component.draftCode = null;
// //     } else {
// //       // 🔥 reject new submission
// //       component.status = "rejected";
// //     }

// //     await component.save();

// //     res.json({
// //       msg: "Component rejected",
// //       component,
// //     });
// //   } catch (err) {
// //     console.error("rejectComponent error:", err);
// //     res.status(500).json({ msg: "Server error" });
// //   }
// // };
// exports.rejectComponent = async (req, res) => {
//   const component = await Component.findById(req.params.id);

//   if (!component) {
//     return res.status(404).json({ msg: "Component not found" });
//   }

//   // 🔥 discard draft
//   component.draftCode = null;
//   component.status = "approved"; // revert to live state

//   await component.save();

//   res.json({
//     msg: "Update rejected, live version kept",
//     component,
//   });
// };


const Component = require("../models/component");

/* ================= GET PENDING COMPONENTS ================= */
/*
  Shows:
  1. New components (status: pending)
  2. Edited components (draftCode exists)
*/
exports.getPendingComponents = async (req, res) => {
  try {
    const components = await Component.find({
      $or: [
        { status: "pending" },        // new submissions
        { draftCode: { $ne: null } }, // edited submissions
      ],
    }).sort({ createdAt: -1 });

    res.json(components);
  } catch (err) {
    console.error("getPendingComponents error:", err);
    res.status(500).json({ msg: "Server error" });
  }
};

/* ================= APPROVE COMPONENT ================= */
/*
  If:
  - New component → approve normally
  - Edited component → replace live code with draftCode
*/
exports.approveComponent = async (req, res) => {
  try {
    const component = await Component.findById(req.params.id);

    if (!component) {
      return res.status(404).json({ msg: "Component not found" });
    }

    // 🔥 Promote draft → live (ONLY if draft exists)
    if (component.draftCode) {
      component.code = component.draftCode;
      component.draftCode = null;
    }

    component.status = "approved";
    await component.save();

    res.json({
      msg: "Component approved",
      component,
    });
  } catch (err) {
    console.error("approveComponent error:", err);
    res.status(500).json({ msg: "Server error" });
  }
};

/* ================= REJECT COMPONENT ================= */
/*
  If:
  - New component → reject submission
  - Edited component → discard draft, keep old approved code
*/
exports.rejectComponent = async (req, res) => {
  try {
    const component = await Component.findById(req.params.id);

    if (!component) {
      return res.status(404).json({ msg: "Component not found" });
    }

    if (component.draftCode) {
      // 🔥 Reject edit only (keep live version)
      component.draftCode = null;
      component.status = "approved";
    } else {
      // 🔥 Reject brand new component
      component.status = "rejected";
    }

    await component.save();

    res.json({
      msg: "Component rejected",
      component,
    });
  } catch (err) {
    console.error("rejectComponent error:", err);
    res.status(500).json({ msg: "Server error" });
  }
};
