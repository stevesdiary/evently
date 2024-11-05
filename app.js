// import PaystackPop from '@paystack/inline-js'
const PaystackPop = require("@paystack/inline-js");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended:}))
// app.use('/'api/)


module.exports = app;