require("dotenv").config();
const app = require("./app");
app.set("trust proxy", true);
const componentRoutes=require("./routes/component");
const adminRoutes=require("./routes/admin")
const passport = require("passport");
require("./config/passport");



const connectDB = require("./config/db");


connectDB(); // DB connection here
app.use(passport.initialize());

app.use("/auth", require("./routes/auth"));   
app.use("/auth", require("./routes/oauth"));
app.use("/api/ai", require("./routes/ai"));
app.use("/api/user", require("./routes/user"));
app.use("/api/ratings", require("./routes/rating"));
app.use("/api/likes", require("./routes/like"));
app.use("/api/components",componentRoutes);
app.use("/api/admin", adminRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
