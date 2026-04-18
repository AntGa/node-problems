const express = require('express');
const apartmentRouter = require('./routes/apartments');

const app = express();
app.use(express.json());

app.use('/apartments', apartmentRouter);

module.exports = app;
