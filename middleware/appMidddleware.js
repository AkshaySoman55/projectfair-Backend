

const appmiddleware = (req,res,next)=>{
  //logic
  console.log('inside application middleware');
  next()

}

module.exports = appmiddleware