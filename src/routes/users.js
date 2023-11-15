const express = require('express');

const router = express.Router();

const userController = require('../controller/Users.js');

router.post('/', userController.CreateNewUser);

router.get('/', userController.getAllUser);

router.patch('/:idUser', userController.updateUser);

module.exports = router;    