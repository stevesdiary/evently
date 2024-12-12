const express = require('express');
const router = express.Router();
const  { pushNotification, subscribe }  = require("../controllers/notificationController");

router.post("/subscribe", subscribe);

router.post("/push", pushNotification);

module.exports = router;