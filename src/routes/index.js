let app = require('express').Router();

app.use('/user', require('./user'));
app.use('/product', require('./product'));

module.exports = app;
