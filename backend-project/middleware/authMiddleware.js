import jwt from "jsonwebtoken"

 export const authMiddleware = (req, res, next) => {
   const token = req.cookies?.accessToken || req.headers.authorization?.split(' ')[1];

    if(!token){
        return res.status(401).json({
            msg: "Unauthorized",
            error: true
        });
    }

    try{
        
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY);
        req.userId = decoded.id;
        next();

    }catch(error){
        return res.status(401).json({
            msg: "Unauthorized",
            error: true
        });
    }
 } 