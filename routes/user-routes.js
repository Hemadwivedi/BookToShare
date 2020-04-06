const express = require('express');
const router = express.Router();

const userController = require('../controller/userController');

router.get('/search', userController.getAllUsers);
router.post('/create', userController.createUser);

router.get('/:userId' , userController.getUserById);
router.post('/:userId' , userController.editUser);


module.exports = router;