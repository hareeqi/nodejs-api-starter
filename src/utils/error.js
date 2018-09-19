class KnownError {
    constructor(message) {
        this.error = true;
        this.message = message;
    }
}

// List all you known errors here
const error = {
    USER_NOT_FOUND: new KnownError('USER_NOT_FOUND'),
    PRODUCT_NOT_FOUND: new KnownError('PRODUCT_NOT_FOUND'),
    ACCOUNT_ALREADY_IN_USE: new KnownError('ACCOUNT_ALREADY_IN_USE')
};

const handleError = (res, err) => {
    if (err) {
        if (err instanceof KnownError) {
            res.status(200).json(err);
        } else {
            res.status(500).json(err.message);
            console.error(err);
            console.error(err.stack);
        }
    } else {
        res.status(200).json(new KnownError('The api route execution was silently rejected with no error message'));
    }
};

module.exports = error;
module.exports.handleError = handleError;
