const { sleep, error } = require('../utils');
let users = [
    { id: 504, name: 'Mohammad Ali' },
    { id: 213, name: 'mustafa Ahmad' },
    { id: 574, name: 'Hassan Yami' },
    { id: 745, name: 'Clark kent' },
    { id: 315, name: 'Tony Stark' },
    { id: 964, name: 'Peter Parker' },
    { id: 347, name: 'Bruce Wayn' }
];

exports.create = u => {
    users.push(u);
    return u;
};
exports.getALL = async () => {
    return users;
};

exports.getByID = async id => {
    // sleeping to simulate DB calls or api requests

    await sleep(2);

    const user = users.find(u => u.id == id);

    if (!user) {
        throw error.USER_NOT_FOUND;
    }

    return user;
};
