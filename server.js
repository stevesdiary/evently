require('dotenv').config();
const app = require('./app');
const express = require('express');
const bodyParser = require('body-parser');
const webPush = require("web-push");
const path = require('path');
const client = require("./config/neonDb");
const PORT = process.env.LOCAL_PORT || 5000;
app.use(express.static(path.join(__dirname, 'client')));

// CORS middleware
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
