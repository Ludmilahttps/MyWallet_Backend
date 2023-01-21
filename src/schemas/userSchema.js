import joi from "joi"

const userSchema = joi.object ({
    name: joi.string().required(),
    email: joi.email().string().required(),
    password: joi.string().required(),
    checkPassword: joi.any().valid(joi.ref('password')).required()
})

export default userSchema