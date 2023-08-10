import Joi from "joi"

export const signupSchema = Joi.object({
    firstName: Joi.string().required().max(50).message('O campo "nome" pode ter no máximo {{#limit}} caracteres'),
    lastName: Joi.string().required().max(50).message('O campo "sobrenome" pode ter no máximo {{#limit}} caracteres'),
    user: Joi.string().required().max(30).message('O campo "usuário" pode ter no máximo {{#limit}} caracteres'),
    email: Joi.string().required().email({ tlds : { allow: false }}).max(100).message('O campo "email" pode ter no máximo {{#limit}} caracteres'),
    password: Joi.string().required()
    .min(6).message('O campo "senha" pode ter no mínimo {{#limit}} caracteres')
    .max(50).message('O campo "senha" pode ter no máximo {{#limit}} caracteres'),
})

export const loginSchema = Joi.object({
    userOrEmail: Joi.string().required(),
    password: Joi.string().required()
    .min(6).message('O campo "senha" pode ter no mínimo {{#limit}} caracteres')
    .max(50).message('O campo "senha" pode ter no máximo {{#limit}} caracteres'),
})