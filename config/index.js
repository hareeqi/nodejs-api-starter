exports.isDev = !process.env.NODE_ENV;
exports.PORT = process.env.PORT || 3000;
exports.API_PREFIX = process.env.API_PREFIX || '/api/v0';
exports.BASE_URL = process.env.BASE_URL || `http://localhost:${exports.PORT}${exports.API_PREFIX}`;
