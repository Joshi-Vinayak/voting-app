const jwt = require('jsonwebtoken');

const  jwtAuthMiddleware = (req , res , next)=> {

// first check request header are authorization or not
// const authorization = req.header.authorization
// // console.log(Authorization);
// if(!authorization) return res.status(401).json({error : 'Token does not Found'});

const authorizationHeader = req.headers.authorization;
  if (!authorizationHeader) {
    return res.status(401).json({ error: 'Authorization header missing' });
  }

//Extract jwt token from req header
const token = authorizationHeader.split(' ')[1];
// const token = req.header.authorization.split(' ')[1];
console.log(token);
if(!token) return res.status(401).json({error : 'token not found  '});

try 
{
    //verify token 
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //Attach user information to the  request object
    req.user = decoded
    next();

}
catch (err) {
    res.status(401).json({error : ' Invalid Token'})
}
}


//Function To Generate JWT Token

const generateToken= (userData) =>{
    //Generate new jwt token using user data
    return jwt.sign(userData , process.env.JWT_SECRET );
}

module.exports= {jwtAuthMiddleware , generateToken};