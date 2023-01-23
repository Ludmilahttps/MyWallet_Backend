import joi from "joi"

const postSchema = joi.object ({
    value: joi.number().required(),
    description: joi.string().required(),
    type: joi.valid('enter', 'exit').required(),
})

export default postSchema