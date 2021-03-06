const { test, assertError, ERROR, assert } = require('./tester');

describe('User Endpoints', () => {
    test.get(`user/`, 'Get all users', res => {
        assert.equal(Array.isArray(res), true);
    });
    test.post('user/', 'Create new user', { id: 111, name: 'Ibrahim hammed' }, res => {
        assert.equal(res.id, 111);
    });
    test.get(`user/111`, 'Get user by id exist', res => {
        assert.equal(res.id, 111);
        assert.equal(res.name, 'Ibrahim hammed');
    });
    test.get('user/555', 'Get user by ID NOT found', res => {
        assertError(res, ERROR.USER_NOT_FOUND);
    });
    test.put('user/111', 'update user info', { id: 111, name: 'abduallah' }, res => {
        assert.equal(res.id, 111);
        assert.equal(res.name, 'abduallah');
    });
});
