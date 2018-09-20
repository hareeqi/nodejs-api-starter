require('dotenv').config();
require('./config/aliases');
const config = require('config');
const express = require('express');
const app = express();
const routes = require('routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// eslint-disable-next-line
app.use((error, req, res, next) => {
    res.status(400).json({ err: 'Illegel Server Operation' });
});

process.on('unhandledRejection', err => {
    console.error(err);
    console.error(err.stack);
    console.error('unhandledRejection server index.js');
});

process.on('uncaughtException', err => {
    console.error(err);
    console.error(err.stack);
    console.error('uncaughtException server index.js');
});

app.use(config.API_PREFIX, routes);
app.listen(config.PORT, () => {
    console.log(`Server Started on`, config.PORT);
});
