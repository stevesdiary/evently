const express = require('express');
const router = express.Router();
const { validateOrganizer } = require('../middlewares/validate');
const {organizerController} = require('../controllers/organizerController');
const { validate } = require("../middlewares/validate");
const { createOrganizerSchema, idSchema } = require('../validator/validator');


router.post('/create', validate(createOrganizerSchema, 'body'), organizerController.createOrganizer);
router.get ('/allorganizers', organizerController.getAll);
router.get('/getone/:id', organizerController.getOne);
router.delete('/deleteorganizer/:id', organizerController.deleteOne);
module.exports = router;
