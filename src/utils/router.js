const express = require('express');
const { handleError } = require('./error');

class Router {
    constructor() {
        this.routes = express();
    }
    get(path, action) {
        this.request('get', path, action);
    }
    post(path, action) {
        this.request('post', path, action);
    }
    put(path, action) {
        this.request('put', path, action);
    }
    delete(path, action) {
        this.request('delete', path, action);
    }
    request(method, path, action) {
        this.routes[method](path, async (req, res) => {
            try {
                const data = await action(req);
                data ? res.status(200).json(data) : res.sendStatus(200);
            } catch (e) {
                handleError(res, e);
            }
        });
    }
}

module.exports = () => new Router();
