const express = require('express');
const app = express();

app.use(require('./quiz'));

module.exports = app;