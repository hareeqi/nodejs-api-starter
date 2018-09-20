const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});

//app.use('/user', require('./user'));
//app.use('/product', require('./product'));

module.exports = app;
