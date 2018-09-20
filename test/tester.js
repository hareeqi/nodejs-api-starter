const request = require('supertest');
const app = require('../src/routes');

const testAPI = (method, path, desc, params, action) =>
    test(`${desc} - ${method.toUpperCase()}:${path}`, async done => {
        if (typeof params === 'function') {
            action = params;
            params = false;
        }
        try {
            // prettier-ignore
            const res = await request(app)[method](path).send(params || {});
            console.log(res);
            expect(res.statusCode).toBe(200);
            action && (await action());
            done();
        } catch (e) {
            done(e);
        }
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
