// const mongoose = require("mongoose");

// const componentSchema = new mongoose.Schema(
//   {
//     title: { type: String, required: true },
//     category: { type: String, required: true },
//       code: String,

//   // 🔥 DRAFT (pending edits)
//   draftCode: String,
//     code: { type: String, required: true }, // React code
//     price: { type: Number, default: 0 }, // 0 = free
//     createdBy: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     status: {
//       type: String,
//       enum: ["pending", "approved", "rejected"],
//       default: "pending",
//     },
//     likesCount: { type: Number, default: 0 },
//     avgRating: { type: Number, default: 0 },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Component", componentSchema);

const mongoose = require("mongoose");

const componentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    // 🔥 LIVE APPROVED CODE (shown in marketplace)
    code: {
      type: String,
      required: true,
    },

    // 🔥 DRAFT CODE (used when developer edits component)
    // This does NOT affect marketplace until approved
    draftCode: {
      type: String,
      default: null,
    },

    price: {
      type: Number,
      default: 0, // 0 = free
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // 🔥 STATUS OF LIVE COMPONENT
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },

    // 🔥 STATUS OF EDIT REQUEST (VERY IMPORTANT)
    // This controls edit approval without touching marketplace
    editStatus: {
      type: String,
      enum: ["none", "pending", "approved", "rejected"],
      default: "none",
    },

    likesCount: {
      type: Number,
      default: 0,
    },

    avgRating: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Component", componentSchema);
