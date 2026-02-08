const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String,  unique: true,sparse: true,required: function () {
    return this.provider !== "github"; // GitHub may not provide email
  },
},
    password: {
  type: String,
  required: function () {
    return this.provider === "local";
  },
},
provider: {
  type: String,
  enum: ["local", "google", "github"],
  default: "local",
},

    role: {
      type: String,
      enum: ["user", "developer", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
