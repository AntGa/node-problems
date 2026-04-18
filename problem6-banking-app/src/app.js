const express = require('express');
const pinRouter = require('./routes/pin');

const app = express();
app.use(express.json());

app.use('/pin', pinRouter);

module.exports = app;
