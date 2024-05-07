//to verify the token 
const jwt = require('jsonwebtoken')

const jwtMiddleware = (req,res,next)=>{
  console.log('inside jwt to middleware');
  const token = req.headers['authorization'].split(' ')[1]
  console.log(token);
  
  try {
    const response = jwt.verify(token,"superSecrectkey123")
    console.log(response);
    req.payload = response.userId
    next()
  } catch (error) {
    res.status(401).json('Authorization failed',error)
    
  }
}

module.exports = jwtMiddleware