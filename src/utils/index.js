exports.router = require('./router');
exports.error = require('./error');
exports.tester = require('./tester');
exports.sleep = (time = 1) => new Promise(resolve => setTimeout(resolve, time * 1000));
