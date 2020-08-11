const pick = require("../utils/pick");
const Joi = require("joi");

const validate = (schema) => (req, res, next) => {
  const validSchema = pick(schema, ["params", "query", "body"]);
  const object = pick(req, Object.keys(validSchema));
  const { value, error } = Joi.compile(validSchema)
    .prefs({ errors: { label: "key" } })
    .validate(object, { abortEarly: false });

  if (error) {
    const errors = error.details.map((detail) => ({
      key: detail.context.key,
      message: detail.message,
    }));

    return res.status(422).send({
      errors,
    });
  }

  next();
};

module.exports = validate;
