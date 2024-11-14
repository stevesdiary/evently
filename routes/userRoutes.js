const express = require('express');
const router = express.Router();
const { validateUser } = require('../middlewares/validate');
const {userController} = require('../controllers/userController');
const  validate  = require("../middlewares/validate");


router.post('/create', userController.createUser);

module.exports = router;
