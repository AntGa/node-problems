const express = require('express');
const eventRouter = require('./routes/events');

const app = express();
app.use(express.json());

app.use('/events', eventRouter);

module.exports = app;
