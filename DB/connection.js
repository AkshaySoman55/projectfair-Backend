//server and database connect
//1) import mongoose

const mongoose = require('mongoose')

const connectionString = process.env.DATABASE

//connect
mongoose.connect(connectionString).then(()=>{
  
  console.log('mongoose connected successfully');
  
}).catch((err)=>{
  console.log(err);
})
