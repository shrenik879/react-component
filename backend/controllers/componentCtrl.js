const Component = require("../models/component.js");
const Like = require("../models/like.js");


// CREATE (developer)
exports.createComponent = async (req, res) => {
  const { title, category, code} = req.body;

  const component = await Component.create({
    title,
    category,
    code,
    createdBy: req.user.id,
    status: "pending",
  });

  res.status(201).json({
    msg: "Component submitted for approval",
    component,
  });
};

// GET ALL APPROVED (public)
// exports.getApprovedComponents = async (req, res) => {
//   const components = await Component.find({ status: "approved" });
//   res.json(components);
// };

// exports.getApprovedComponents = async (req, res) => {
//   try {
//     const components = await Component.find({ status: "approved" });

//     const componentsWithStats = await Promise.all(
//       components.map(async (component) => {
//         const ratings = await Rating.find({ componentId: component._id });

//         const avg =
//           ratings.length > 0
//             ? ratings.reduce((sum, r) => sum + r.value, 0) / ratings.length
//             : 0;

//         return {
//           ...component.toObject(),
//           likesCount: component.likesCount || 0,
//           averageRating: Number(avg.toFixed(1)),
//         };
//       })
//     );

//     res.json(componentsWithStats);
//   } catch (err) {
//     res.status(500).json({ msg: "Server error" });
//   }
// };


// exports.getApprovedComponents = async (req, res) => {
//   try {
//     const components = await Component.find({ status: "approved" }).lean();

//     const componentIds = components.map(c => c._id);

//     // 🔥 Get all ratings at once (better performance)
//     const ratings = await Rating.find({
//       componentId: { $in: componentIds }
//     }).lean();

//     const ratingsMap = {};

//     ratings.forEach(r => {
//       if (!ratingsMap[r.componentId]) {
//         ratingsMap[r.componentId] = [];
//       }
//       ratingsMap[r.componentId].push(r.value);
//     });

//     const result = components.map(component => {
//       const values = ratingsMap[component._id] || [];

//       const avg =
//         values.length > 0
//           ? values.reduce((a, b) => a + b, 0) / values.length
//           : 0;

//       return {
//         ...component,
//         likesCount: component.likesCount || 0,
//         avgRating: Number(avg.toFixed(1)),
//       };
//     });

//     res.json(result);

//   } catch (err) {
//     console.error("getApprovedComponents error:", err);
//     res.status(500).json({ msg: "Server error" });
//   }
// };


// exports.getApprovedComponents = async (req, res) => {
//   try {
//     const components = await Component.find({ status: "approved" })
//       .sort({ createdAt: -1 });

//     res.json(components);

//   } catch (err) {
//     console.error("getApprovedComponents error:", err);
//     res.status(500).json({ msg: "Server error" });
//   }
// };

exports.getApprovedComponents = async (req, res) => {
  try {
    const { sort } = req.query;

    let sortQuery = { createdAt: -1 }; // default: newest

    if (sort === "rating") {
      sortQuery = { avgRating: -1 };
    }

    if (sort === "likes") {
      sortQuery = { likesCount: -1 };
    }

    const components = await Component.find({ status: "approved" })
      .sort(sortQuery);

    res.json(components);
  } catch (err) {
    console.error("getApprovedComponents error:", err);
    res.status(500).json({ msg: "Server error" });
  }
};


// exports.deleteComponent = async (req, res) => {
//   try {
//     const component = await Component.findById(req.params.id);
//     if (!component) {
//       return res.status(404).json({ msg: "Component not found" });
//     }

//     await component.deleteOne();
//     res.json({ msg: "Component deleted successfully" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ msg: "Server error" });
//   }
// };
exports.deleteComponent = async (req, res) => {
  try {
    const component = await Component.findById(req.params.id);

    if (!component) {
      return res.status(404).json({ msg: "Component not found" });
    }

    // 🔒 AUTHORIZATION RULE
    const isAdmin = req.user.role === "admin";
    const isOwner = component.createdBy.toString() === req.user.id;

    if (!isAdmin && !isOwner) {
      return res.status(403).json({ msg: "Not authorized to delete" });
    }

    await component.deleteOne();

    res.json({ msg: "Component deleted successfully" });
  } catch (err) {
    console.error("deleteComponent error:", err);
    res.status(500).json({ msg: "Server error" });
  }
};




// GET MY COMPONENTS (developer)
// exports.getMyComponents = async (req, res) => {
//   const components = await Component.find({
//     createdBy: req.user.id,
//   });
//   res.json(components);
// };


// GET COMPONENT BY ID (public)
// exports.getComponentById = async (req, res) => {
//   try {
//     const component = await Component.findById(req.params.id);

//     if (!component) {
//       return res.status(404).json({ msg: "Component not found" });
//     }

//     res.json(component);
//   } catch (err) {
//     res.status(500).json({ msg: "Server error" });
//   }
// };


// exports.getMyComponents = async (req, res) => {
//   try {
//     if (!req.user || !req.user.id) {
//       return res.status(401).json({ msg: "Unauthorized" });
//     }

//     const components = await Component.find({
//       createdBy: req.user.id,
//     }).sort({ createdAt: -1 });

//     res.json(components);
//   } catch (error) {
//     console.error("getMyComponents error:", error);
//     res.status(500).json({ msg: "Server error" });
//   }
// };
// exports.getMyComponents = async (req, res) => {
//   try {
//     console.log("REQ.USER =", req.user);

//     const components = await Component.find({
//       createdBy: req.user.id,
//     }).sort({ createdAt: -1 });

//     res.json(components);
//   } catch (error) {
//     console.error("getMyComponents error:", error);
//     res.status(500).json({ msg: "Server error" });
//   }
// };
exports.getMyComponents = async (req, res) => {
  try {
    console.log("REQ.USER:", req.user);

    if (!req.user || !req.user.id) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    const components = await Component.find({
      createdBy: req.user.id,
    }).sort({ createdAt: -1 });

    res.json(components);
  } catch (error) {
    console.error("getMyComponents error:", error);
    res.status(500).json({ msg: "Server error" });
  }
};




// UPDATE COMPONENT (developer – only own component)

// exports.updateComponent = async (req, res) => {
//   try {
//     const { title, category, code } = req.body;
//     const componentId = req.params.id;

//     const component = await Component.findById(componentId);

//     if (!component) {
//       return res.status(404).json({ msg: "Component not found" });
//     }

//     // 🔒 Only creator can edit
//     if (component.createdBy.toString() !== req.user.id) {
//       return res.status(403).json({ msg: "Not authorized" });
//     }

//     component.title = title;
//     component.category = category;
//     component.code = code;

//     // 🔥 IMPORTANT: reset approval
//     component.status = "pending";

//     await component.save();

//     res.json({
//       msg: "Component updated and sent for re-approval",
//       component,
//     });
//   } catch (err) {
//     console.error("updateComponent error:", err);
//     res.status(500).json({ msg: "Server error" });
//   }
// };
// exports.updateComponent = async (req, res) => {
//   try {
//     const { title, category, code } = req.body;
//     const componentId = req.params.id;

//     const component = await Component.findById(componentId);

//     if (!component) {
//       return res.status(404).json({ msg: "Component not found" });
//     }

//     // 🔒 Only creator can edit
//     if (component.createdBy.toString() !== req.user.id) {
//       return res.status(403).json({ msg: "Not authorized" });
//     }

//     // ✅ Update metadata safely
//     component.title = title;
//     component.category = category;

//     // 🔥 DO NOT TOUCH LIVE CODE
//     // 🔥 DO NOT CHANGE status

//     // ✅ Save edited code as draft
//     component.draftCode = code;

//     await component.save();

//     res.json({
//       msg: "Edit submitted for admin approval",
//       component,
//     });
//   } catch (err) {
//     console.error("updateComponent error:", err);
//     res.status(500).json({ msg: "Server error" });
//   }
// };
// exports.updateComponent = async (req, res) => {
//   try {
//     const { title, category, code } = req.body;
//     const component = await Component.findById(req.params.id);

//     if (!component) {
//       return res.status(404).json({ msg: "Component not found" });
//     }

//     // only owner
//     if (component.createdBy.toString() !== req.user.id) {
//       return res.status(403).json({ msg: "Not authorized" });
//     }

//     component.title = title;
//     component.category = category;

//     // 🔥 IMPORTANT CHANGE
//     component.draftCode = code;     // store edit
//     // ❌ DO NOT touch component.code
//     // ❌ DO NOT change status

//     await component.save();

//     res.json({
//       msg: "Edit submitted for admin approval",
//       component,
//     });
//   } catch (err) {
//     console.error("updateComponent error:", err);
//     res.status(500).json({ msg: "Server error" });
//   }
// };


// exports.updateComponent = async (req, res) => {
//   try {
//     const { title, category, code } = req.body;
//     const component = await Component.findById(req.params.id);

//     if (!component) {
//       return res.status(404).json({ msg: "Component not found" });
//     }

//     // 🔒 only creator can edit
//     if (component.createdBy.toString() !== req.user.id) {
//       return res.status(403).json({ msg: "Not authorized" });
//     }

//     component.title = title;
//     component.category = category;

//     // 🔥 IMPORTANT FIX
//     component.draftCode = code;   // ✅ edited code goes here
//     component.status = "pending"; // send to admin

//     await component.save();

//     res.json({
//       msg: "Update sent for admin approval",
//       component,
//     });
//   } catch (err) {
//     console.error("updateComponent error:", err);
//     res.status(500).json({ msg: "Server error" });
//   }
// };

exports.updateComponent = async (req, res) => {
  try {
    const { title, category, code } = req.body;
    const component = await Component.findById(req.params.id);

    if (!component) {
      return res.status(404).json({ msg: "Component not found" });
    }

    if (component.createdBy.toString() !== req.user.id) {
      return res.status(403).json({ msg: "Not authorized" });
    }

    component.title = title;
    component.category = category;

    // 🔥 KEY FIX
    component.draftCode = code;

    // ONLY set pending if this is a NEW component
    if (component.status !== "approved") {
      component.status = "pending";
    }

    await component.save();

    res.json({
      msg: "Update sent for admin approval",
      component,
    });
  } catch (err) {
    console.error("updateComponent error:", err);
    res.status(500).json({ msg: "Server error" });
  }
};


// GET SINGLE COMPONENT (public)
// exports.getComponentById = async (req, res) => {
//   try {
//     const component = await Component.findById(req.params.id);
//     if (!component) {
//       return res.status(404).json({ msg: "Component not found" });
//     }
//     res.json(component);
//   } catch (err) {
//     res.status(500).json({ msg: "Server error" });
//   }
// };


// PUT /components/:id/edit


exports.getComponentById = async (req, res) => {
  try {
    const component = await Component.findById(req.params.id);
    if (!component) {
      return res.status(404).json({ msg: "Component not found" });
    }

    let userLiked = false;

    if (req.user) {
      const existing = await Like.findOne({
        userId: req.user.id,
        componentId: req.params.id,
      });
      userLiked = !!existing;
    }

    res.json({
      ...component.toObject(),
      likesCount: component.likesCount,
      userLiked,
    });

  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

// exports.getComponentById = async (req, res) => {
//   try {
//     const componentId = req.params.id;
//     const component = await Component.findById(componentId);

//     if (!component) {
//       return res.status(404).json({ msg: "Component not found" });
//     }

//     let userLiked = false;

//     // ✅ check only if user is logged in
//     if (req.user && req.user.id) {
//       const liked = await Like.findOne({
//         componentId,
//         userId: req.user.id,
//       });
//       userLiked = !!liked;
//     }

//     res.json({
//       ...component.toObject(),
//       userLiked, // 🔥 THIS IS THE KEY
//     });
//   } catch (err) {
//     console.error("getComponentById error:", err);
//     res.status(500).json({ msg: "Server error" });
//   }
// };
