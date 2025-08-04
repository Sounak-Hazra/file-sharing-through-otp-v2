const getParams = (req, res, next) => {
    console.log(req.query);

    for (const key in req.query) {
        req[key] = req.query[key]
    }

    next();
};

export default getParams
