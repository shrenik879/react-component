const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


exports.register=async (req,res) =>{
    const{name,email,password,role}=req.body;

    const exist=await User.findOne({email});
    if(exist) return res.status(400).json({msg: "User exists"});

    const hash=await bcrypt.hash(password,10);

    const user=await User.create({
        name,
        email,
        password:hash,
        role:role || "user",
         provider: "local", 
    });

    res.status(201).json({msg:"user registered"});
};


exports.login=async (req,res) =>{
    const {email,password} =req.body;

    const user=await User.findOne({email});
    if(!user) return res.status(400).json({msg:"Invalid credentials"});

    const isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch) return res.status(400).json({msg:"Invalid credentials"});

    // const token=jwt.sign(
    //     {id:user._id,role:user.role},
    //     process.env.JWT_SECRET,
    //     {expiresIn: "1D"},
    // );
    const token = jwt.sign(
  {
    id: user._id,
    email: user.email,
    provider: user.provider, // 🔥 REQUIRED
    role: user.role,
    
  },
  process.env.JWT_SECRET,
  { expiresIn: "7d" }
);

 
    res.json({token, user: {
      id: user._id,
      name: user.name,      // 👈 THIS FIXES YOUR ISSUE
      email: user.email,
      role: user.role,
       provider: user.provider,
       
    },});
}


exports.changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const userId = req.user.id;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

//     if (user.provider !== "local") {
//   return res.status(400).json({
//     msg: "Password change not allowed for OAuth accounts",
//   });
// }
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Current password is incorrect" });
    }

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);
    await user.save();

    res.json({ msg: "Password updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};


// exports.login = async (req, res) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email });
//   if (!user) return res.status(400).json({ msg: "Invalid credentials" });

//   const isMatch = await bcrypt.compare(password, user.password);
//   if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

//   const token = jwt.sign(
//     { id: user._id, role: user.role },
//     process.env.JWT_SECRET,
//     { expiresIn: "1d" }
//   );

//   res.json({ token });
// };
