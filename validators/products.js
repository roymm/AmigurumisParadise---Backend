const Joi = require("joi");

exports.addProductSchema = Joi.object({
    email: Joi.string().email().required(),
    newPassword: Joi.string().min(8).alphanum().required(),
    token: Joi.number().min(100000).max(999999).required().error(() => new Error("El código debe ser un número entero de 6 dígitos.")),
});