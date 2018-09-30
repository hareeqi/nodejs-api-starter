const { get, post, put, assertError, ERROR, assert } = require('./tester');

describe('User Endpoints', () => {
    post('user/', 'Create new user', { id: 111, name: 'Ibrahim hammed' }, res => {
        assert.equal(res.id, 111);
    });
    get(`user/111`, 'Get user by id exist', res => {
        assert.equal(res.id, 111);
        assert.equal(res.name, 'Ibrahim hammed');
    });
    get('user/555', 'Get user by ID NOT found', res => {
        assertError(res, ERROR.USER_NOT_FOUND);
    });
    put('user/111', 'update user info', { id: 111, name: 'abduallah' }, res => {
        assert.equal(res.id, 111);
    });
});
