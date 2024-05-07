// 1) import .env module 
// loads .env file contents into process.env by default

require('dotenv').config()

// 2) express import
const express = require('express')

// 3) import cors
const cors = require('cors')

//import router
const router = require('./Routing/router')


/* //import application middle
 const appMidddleware = require('./middleware/appMidddleware') */


//import connection file
require('./DB/connection')

// 4) create server
const pfServer = express()

// 5) use cors by server
pfServer.use(cors())

//6) convert json to javscript
// json() method returns a middleware that csan convert json formats to js object - it can control req-res cycle control 
pfServer.use(express.json()) 




//server using router
pfServer.use(router)

//first -name by which other application can use this folder
//second - expres.static - export that folder 
pfServer.use('/uploads',express.static('./uploads'))

//7) set port
const PORT = 4000 || process.env

//8) run server
pfServer.listen(PORT,()=>{
  console.log(`SERVER RUNNING SUCCESSFULLY AT PORT ${PORT}`);
})



//GET REQUEST
pfServer.get('/',(req,res)=>{
  res.send('<h1 style="color:blue"> server running succesfully</h1>')
})

//post request 
pfServer.post('/',(req,res)=>{
  res.send('post request')
})

//put request
pfServer.put('/',(req,res)=>{
  res.send('put request')
}) 

