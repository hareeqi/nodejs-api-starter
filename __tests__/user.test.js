//const { get, post } = require('tester');
//const ERRORS = require('utils').error;

const request = require('supertest');
const app = require('../src/routes/index');

describe('Test the root path', () => {
    test('It should response the GET method', done => {
        request
            .agent(app)
            .get('/')
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            });
    });
});

describe('User Endpoints', () => {
    it('nntytyjn', () => expect(1).toBe(1));
    test('jjjjjj', () => expect(1).toBe(1));

    /*
    post('/user/', 'Create new user', { id: 111, name: 'Ibrahim hammed' }, res => {
        expect(res.id).toBe(111);
    });
    
    get('/user/111', 'Get user by id exist', res => {
        expect(res.id).toBe(111);
    });
    get('/user/555', 'Get user by ID NOT found', res => {
        //expectError(res, ERRORS.USER_NOT_FOUND);
    });
    */
});
