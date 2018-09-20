const { get, post, assertError, ERROR, assert } = require('./tester');

describe('Products Endpoints', () => {
    get('/user/504', 'Get product by id exist', res => {
        assert.equal(res.id, 504);
    });
    get('/user/555', 'Get product by ID NOT found', async res => {
        assertError(res, ERROR.USER_NOT_FOUND);
    });
});
