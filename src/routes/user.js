const { router } = require('../utils');
const { user } = require('../models');

const app = router();

app.get('/', () => user.getALL());
app.post('/', req => user.create(req.body));
app.get('/:user_id', req => user.getByID(req.params.user_id));
app.put('/:user_id', req => user.update(req.params.user_id, req.body));

module.exports = app.routes;
