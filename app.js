// import PaystackPop from '@paystack/inline-js'
// const PaystackPop = require("@paystack/inline-js");
const express = require("express");
const app = express();
const cors = require
const path = require("path");
const { db } = require("./config/dbConfig");
const eventRoutes = require("./routes/eventRoutes");
const userRoutes = require("./routes/userRoutes");
const organizerRoutes = require("./routes/organizerRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
app.use(express.json());
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

app.use("/event", userRoutes);
app.use("/user", userRoutes);
app.use('/organizer', organizerRoutes);
app.use('/notification', notificationRoutes);
app.use('/api', (req, res) => {
    return res.send({ message: 'App is running' });
});

module.exports = app;
