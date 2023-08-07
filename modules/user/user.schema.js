import Joi from "joi"

export const signupSchema = Joi.object({
    firstName: Joi.string().required().max(50),
    lastName: Joi.string().required().max(50),
    user: Joi.string().required().max(30),
    email: Joi.string().required().email({ tlds : { allow: false }}).max(100),
    password: Joi.string().required().min(6).max(50),
})

