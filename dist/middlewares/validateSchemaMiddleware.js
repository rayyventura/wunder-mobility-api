export function validateSchemaMiddleware(schema) {
    return function (req, res, next) {
        var validation = schema.validate(req.body);
        if (validation.error) {
            return res.status(422).send({ error: validation.error.message });
        }
        next();
    };
}
export function validateJsonSchema(schema) {
    return function (req, res, next) {
        var validation = schema.validate(JSON.parse(req.body.data));
        if (validation.error) {
            return res.status(422).send({ error: validation.error.message });
        }
        next();
    };
}
