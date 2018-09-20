exports.router = require('./router');
exports.error = require('./error');
exports.sleep = (time = 1) => new Promise(resolve => setTimeout(resolve, time));
