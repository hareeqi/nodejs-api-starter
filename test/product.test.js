const { get, post, put, assertError, ERROR, assert } = require('./tester');

describe('Products Endpoints', () => {
    post('product', 'Add new product', { id: 147, name: 'bat knife' }, res => {
        assert.equal(res.id, 147);
    });
    get('product/504', 'Get product by id exist', res => {
        assert.equal(res.id, 504);
    });
    get('product/576', 'Get product by id NOT EXIST', res => {
        assertError(res, ERROR.PRODUCT_NOT_FOUND);
    });
});
