const express = require('express');
const router =express.Router()
const profileController = require('../controllers/profileController');
const TodoListController = require('../controllers/TodoListController');
const AuthVerifyMiddleware = require('../middlewares/AuthVerifyMiddleware')



router.post('/CreateProfile',profileController.CreateProfile);
router.post('/UserLogin',profileController.UserLogin);

//After Login 
router.get('/SelectProfile',AuthVerifyMiddleware,profileController.SelectProfile);
router.post('/UpdateProfile',AuthVerifyMiddleware,profileController.UpdateProfile);

//ToDo Project
router.post('/CreateToDo',AuthVerifyMiddleware,TodoListController.CreateToDo);
router.get('/SelectToDo',AuthVerifyMiddleware,TodoListController.SelectToDo);
router.post('/UpdateToDo',AuthVerifyMiddleware,TodoListController.UpdateToDo);
router.post('/DeleteToDo',AuthVerifyMiddleware,TodoListController.DeleteToDo);
router.post('/UpdateStatusToDo',AuthVerifyMiddleware,TodoListController.UpdateStatusToDo);






module.exports=router;