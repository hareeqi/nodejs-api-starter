const { router } = require('utils');
const { product } = require('models');

const app = router();

app.get('/', () => product.getALL());
app.get('/:product_id', req => product.getByID(req.params.product_id));

module.exports = app.routes;
