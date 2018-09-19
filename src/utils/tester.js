const request = require('request');
const config = require('config');
const { spawn } = require('child_process');
const { assert, expect, should: ShouldFun } = require('chai');
const should = ShouldFun();

const testAPI = (method, path, desc, params, action) =>
    it(`${desc} - ${method.toUpperCase()}:${path}`, done => {
        if (typeof params === 'function') {
            action = params;
            params = false;
        }
        request[method]({ url: `${config.BASE_URL}${path}`, json: params || true }, async (err, res, body) => {
            try {
                assert.equal(res.statusCode, 200);
                action && (await action(body));
                done();
            } catch (e) {
                done(e);
            }
        });
    });

const assertError = (res, error) => {
    assert.equal(res.error, true);
    assert.equal(res.message, error.message);
};

const get = (...ar) => testAPI('get', ...ar);
const post = (...ar) => testAPI('post', ...ar);
const put = (...ar) => testAPI('put', ...ar);
const del = (...ar) => testAPI('delete', ...ar);

const startTest = () => spawn(`npm run test`, { shell: '/bin/bash', stdio: 'inherit' });

module.exports = { should, assert, assertError, expect, get, post, put, del, startTest };
