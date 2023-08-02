
import Joi from "joi"
import createHandler from "../../../lib/middlewares/nextConnect"

import validate from "../../../lib/middlewares/validation"

import { signupUser } from "../../../modules/user/user.service"

const postSchema = Joi.object({
    firstName: Joi.string().required().max(50),
    lastName: Joi.string().required().max(50),
    user: Joi.string().required().max(30),
    email: Joi.string().required().email().max(100),
    password: Joi.string().required().min(6).max(50),
})

const signup = createHandler()

signup.post(validate({body: postSchema}),(req, res) => {
    signupUser(req.body)
    res.status(200).json({ teste: "ok" })
  })

export default signup