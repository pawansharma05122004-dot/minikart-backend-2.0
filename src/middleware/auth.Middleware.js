import jwt from 'jsonwebtoken'

function verifyToken(req,res,next){
    const token = req.header('Authorization');
    if(!token)
    return res.status(401).json({error:'Access Denied'});
    try{
        const decode = jwt.verify(token,'tarun@1234');
        req.userId = decode.userId;
        next();
    }catch(err){
        res.status(401).json({err:'Invalid User'});
    }
}

export default verifyToken;