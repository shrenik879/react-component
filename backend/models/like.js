const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    componentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Component",
      required: true,
    },
  },
  { timestamps: true }
);

likeSchema.index({ userId: 1, componentId: 1 }, { unique: true });

module.exports = mongoose.model("Like", likeSchema);
