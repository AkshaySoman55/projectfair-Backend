//1) import express
 const express = require('express')

 //import usercontroller
 const UserController = require('../controllers/UserController')

 //import projectController
 const projectController = require('../controllers/projectController')
const jwtMiddleware = require('../middleware/jwtMiddleware')

//import multer
const multerConfig = require('../middleware/multerMiddleware')


 //routing is created with the help of routing class present in express module 
 
 //2) create an object for routing class
 const router = new express.Router()


 //3) set the path
 //path for register request
 router.post('/user/register',UserController.register)

 //path to resolve login request
 router.post('/user/login',UserController.login)

//path for resolve add project request
router.post('/add-project', jwtMiddleware,multerConfig.single('projectImage') , projectController.addProject)

//path to get home projects
router.get('/home-project',projectController.getHomeProject)

//path to get all project
router.get('/all-project',jwtMiddleware,projectController.getAllProject)

//path to get userproject
router.get('/user/all-project',jwtMiddleware,projectController.getUserProject)

//path to delete user project
router.delete('/user-project/delete/:id',jwtMiddleware,projectController.deleteUserProject)

//path to update the user project
router.put('/project/edit/:projectId',jwtMiddleware,multerConfig.single('projectImage'),projectController.editUserProject)

//path for profile update
router.put('/profile-update',jwtMiddleware,multerConfig.single('profile'),UserController.profileUpdate)


 //4) export the router
 module.exports = router




  
