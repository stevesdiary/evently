// import PaystackPop from '@paystack/inline-js'
// const PaystackPop = require("@paystack/inline-js");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
// const { eventRoute } = require("./routes/eventRoute");
app.use(express.json());



app.use(express.urlencoded({ extended: true }));
app.use('/api', (req, res) => {
	return res.send({ message: 'App is running' });
})


module.exports = app;