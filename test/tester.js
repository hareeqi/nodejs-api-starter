const supertest = require('supertest');
const assert = require('assert');
const ERROR = require('../src/utils/error');
const app = require('../src/routes');

const testAPI = (method, path, desc, params, action) =>
    it(`${desc} - ${method.toUpperCase()}:${path}`, done => {
        if (typeof params === 'function') {
            action = params;
            params = false;
        }
        // prettier-ignore
        supertest(app)[method](path).send(params || {}).set('Accept', 'application/json').end( async (err, res) => {
           if(err){
            done(err);
           } else {
               try {
                assert.equal(res.statusCode, 200);
                action && (await action(res.body));
                done();
               } catch (r) {
                done(r)
               }
            
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

module.exports = { assertError, get, post, put, del, ERROR, assert };
