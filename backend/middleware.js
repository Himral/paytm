const {JWT_SECRET} = require("./config");
const jwt = require("jsonwebtoken");

const authMiddleware = (req,res,next) => {
    const authHeader = req.headers.authorization;
     //console.log(authHeader);
    if(!authHeader || !authHeader.startsWith('Bearer '))
        {
            return res.status(403).json({error: "Unauthorized"});
        }

        const token = authHeader.split(' ')[1];
        console.log('Reached token part!');
       
        try{
            const decoded = jwt.verify(token, JWT_SECRET);
            
            req.userId = decoded.userId;
            next();
        } catch(err){
            return res.status(403).json({message : "Unable to authorize the user"});
        }
};

module.exports = {
    authMiddleware
}