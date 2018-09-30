const { test, assertError, ERROR, assert } = require('./tester');

describe('Products Endpoints', () => {
    test.post('product', 'Add new product', { id: 147, name: 'bat knife' }, res => {
        assert.equal(res.id, 147);
    });
    test.get('product/504', 'Get product by id exist', res => {
        assert.equal(res.id, 504);
    });
    test.get('product/576', 'Get product by id NOT EXIST', res => {
        assertError(res, ERROR.PRODUCT_NOT_FOUND);
    });
});
