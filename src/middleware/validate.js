const validate = schema => (req, res, next) => {
    const { error, value } = schema.validate(req.body, {abortEarly : false});

    if (error) {
        const errors = error.details.map((detail) =>({
            key: detail.context.key,
            message: detail.message
        }) );

        return res.status(422).send({
            errors
        });
    }

    next();
}

module.exports = validate;