const express = require('express');
const truckRouter = require('./routes/trucks');

const app = express();
app.use(express.json());

app.use('/trucks', truckRouter);

module.exports = app;
