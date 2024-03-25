import jwt from 'jsonwebtoken'

function verifyToken(req,res,next){
    const token  = req.cookies.token||req.headers.authorization
    let jwtToken = token.replace("Bearer", "").trim(token)
    if(!token)
    return res.status(401).json({error:'Unauthorized HTTP,Token not provide'});
    try{
        const decode = jwt.verify(jwtToken,'tarun@1234');
        req.userId = decode.userId;
        next();
    }catch(err){
        
        res.status(401).json({err:'Invalid User',message:err});
    }
}

export default verifyToken;