const express = require('express');
const userController = require('../controller/registerController');

const router = express.Router();
router.post('/register', userController.registerUser);
router.post('/login',userController.loginUser);
router.get('/allUSer',userController.getAllUSers);
router.delete('/deleteUser/:id',userController.deleteUSer);


module.exports = router;
