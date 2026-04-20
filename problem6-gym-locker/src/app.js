const express = require('express');
const lockerRouter = require('./routes/lockerCode');

const app = express();
app.use(express.json());

app.use('/locker-code', lockerRouter);

module.exports = app;
