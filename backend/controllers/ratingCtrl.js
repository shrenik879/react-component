const Rating = require("../models/rating.js");
const Component = require("../models/component.js");

module.exports = async (req, res) => {
  const { componentId } = req.params;
  const { value } = req.body; // 1–5
  const userId = req.user.id;

  if (value < 1 || value > 5) {
    return res.status(400).json({ msg: "Rating must be between 1 and 5" });
  }

  const existing = await Rating.findOne({ userId, componentId });

  if (existing) {
    existing.value = value;
    await existing.save();
  } else {
    await Rating.create({ userId, componentId, value });
  }

  const ratings = await Rating.find({ componentId });
  const avg =
    ratings.reduce((sum, r) => sum + r.value, 0) / ratings.length;

  await Component.findByIdAndUpdate(componentId, {
    avgRating: avg.toFixed(1),
  });

  res.json({ msg: "Rating saved", avgRating: avg.toFixed(1) });
};
