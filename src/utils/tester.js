const request = require('supertest');
const app = require('../routes/index');

const testAPI = (method, path, desc, params, action) =>
    test(`${desc} - ${method.toUpperCase()}:${path}`, async done => {
        if (typeof params === 'function') {
            action = params;
            params = false;
        }
        // prettier-ignore
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });

const expectError = (res, error) => {
    expect(res.error).toBe(true);
    expect(res.message).toBe(error.message);
};

const get = (...ar) => testAPI('get', ...ar);
const post = (...ar) => testAPI('post', ...ar);
const put = (...ar) => testAPI('put', ...ar);
const del = (...ar) => testAPI('delete', ...ar);

module.exports = { expectError, get, post, put, del };
