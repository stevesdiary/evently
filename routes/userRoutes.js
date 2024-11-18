const express = require('express');
const router = express.Router();
const { validateUser } = require('../middlewares/validate');
const {userController} = require('../controllers/userController');
const { validate } = require("../middlewares/validate");
const { createUserSchema, idSchema } = require('../validator/validator');


router.post('/create', validate(createUserSchema, 'body'), userController.createUser);
router.get ('/allusers', userController.getAll);
router.get('/getone/:id', userController.getOne);
router.delete('/deleteuser/:id', userController.deleteOne);
module.exports = router;
