// import PaystackPop from '@paystack/inline-js'
// const PaystackPop = require("@paystack/inline-js");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const { db } = require("./config/dbConfig");
// const eventRoutes = require("./routes/eventRoutes");
const userRoutes = require("./routes/userRoutes");
app.use(express.json());
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use("/event", userRoutes);
app.use("/user", userRoutes)
app.use('/api', (req, res) => {
    return res.send({ message: 'App is running' });
});

;

module.exports = app;
