const { get, post, del, put, should, assert, assertError, expect } = require('tester');
const ERRORS = require('utils/error');
const { sleep } = require('utils');

describe('Products Endpoints', () => {
    get('/user/504', 'Get product by id exist', res => {
        assert.equal(res.id, 504);
    });
    get('/user/555', 'Get product by ID NOT found', async res => {
        await sleep(0.2);
        assertError(res, ERRORS.USER_NOT_FOUND);
    });
});
