const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// eslint-disable-next-line
app.use((error, req, res, next) => {
    res.status(400).json({ err: 'Illegel Server Operation' });
});

app.use('/user', require('./user'));
app.use('/product', require('./product'));

module.exports = app;
