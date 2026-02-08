
const roleCheck=(...roles) => {
    return (req,res,next) =>{
        console.log("ROLE FROM TOKEN:", req.user.role);

        if(!roles.includes(req.user.role)){
            return res.status(403).json({msg:"Access denied"});
        }
        next();
    };
};

module.exports=roleCheck;