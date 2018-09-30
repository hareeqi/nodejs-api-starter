const { sleep, error } = require('../utils');
let products = [
    { id: 504, name: 'Spoon' },
    { id: 213, name: 'Ball' },
    { id: 574, name: 'Door' },
    { id: 745, name: 'Axe' },
    { id: 315, name: 'Book' },
    { id: 964, name: 'Pen' },
    { id: 347, name: 'Batmobile' }
];

exports.create = async p => {
    products.push(p);
    return p;
};
exports.getALL = () => {
    return products;
};
exports.getByID = async id => {
    // sleeping to simulate DB calls or api requests
    await sleep(2);

    const produ = products.find(p => p.id == id);

    if (!produ) {
        throw error.PRODUCT_NOT_FOUND;
    }
    return produ;
};
