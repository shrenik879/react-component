// const Like = require("../models/like.js");
// const Component = require("../models/component.js");

// module.exports = async (req, res) => {
//   try {
//     const { componentId } = req.params;
//     const userId = req.user.id;

//     const existing = await Like.findOne({ userId, componentId });

//     if (existing) {
//       await Like.deleteOne({ _id: existing._id });
//       await Component.findByIdAndUpdate(componentId, {
//         $inc: { likesCount: -1 },
//       });

//       const updatedComponent = await Component.findById(componentId);

//       return res.json({
//         userLiked: false,
//         likesCount: updatedComponent.likesCount,
//       });
//     }

//     await Like.create({ userId, componentId });
//     await Component.findByIdAndUpdate(componentId, {
//       $inc: { likesCount: 1 },
//     });

//     const updatedComponent = await Component.findById(componentId);

//     res.json({
//       userLiked: true,
//       likesCount: updatedComponent.likesCount,
//     });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ msg: "Server error" });
//   }
// };


const Like = require("../models/like.js");
const Component = require("../models/component.js");

module.exports = async (req, res) => {
  try {
    const { componentId } = req.params;
    const userId = req.user.id;

    const existing = await Like.findOne({ userId, componentId });

    if (existing) {
      await Like.deleteOne({ _id: existing._id });
    } else {
      await Like.create({ userId, componentId });
    }

    // 🔥 Always recalculate total likes
    const totalLikes = await Like.countDocuments({ componentId });

    await Component.findByIdAndUpdate(componentId, {
      likesCount: totalLikes
    });

    res.json({
      likesCount: totalLikes
    });

  } catch (err) {
    console.error("Like error:", err);
    res.status(500).json({ msg: "Server error" });
  }
};
