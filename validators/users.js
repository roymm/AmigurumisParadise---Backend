const Joi = require("joi");

exports.createUserSchema = Joi.object({
    name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).alphanum().required()
});

exports.recoverPasswordSchema = Joi.object({
    email: Joi.string().email().required()
});

exports.verifyTokenSchema = Joi.object({
    email: Joi.string().email().required(),
    newPassword: Joi.string().min(8).alphanum().required(),
    token: Joi.number().min(100000).max(999999).required().error(() => new Error("El código debe ser un número entero de 6 dígitos.")),
});