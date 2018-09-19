const { get, post, del, put, should, assert, assertError, expect } = require('tester');
const ERRORS = require('utils/error');

describe('User Endpoints', () => {
    post('/user/', 'Create new user', { id: 111, name: 'Ibrahim hammed' }, res => {
        assert.equal(res.id, 111);
    });
    get('/user/111', 'Get user by id exist', res => {
        assert.equal(res.id, 111);
    });
    get('/user/555', 'Get user by ID NOT found', res => {
        assertError(res, ERRORS.USER_NOT_FOUND);
    });
});
