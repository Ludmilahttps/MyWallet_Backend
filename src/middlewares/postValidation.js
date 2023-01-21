import postSchema from '../schemas/postSchema.js'

export default async function postValidation(request, response, next) {
    
    const validation = postSchema.validate(request.body)
   
    if(validation.error) {
        return response.status(422).send('Unprocessable Entity')
    }

    next()
}