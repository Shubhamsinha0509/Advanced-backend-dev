// This middleware is basically going to check if session exists or not and if users are or not

export const authMiddleware = (req,res,next) =>{
    if(req.session && req.session.user){
        return next()
    }
    res.status(401).json({message : "Unauthorized: Please login"})
}