import { Router } from "express"
import { getPost, sendPost } from "../controllers/postController.js"
import tokenValidation from '../middlewares/tokenValidation.js'
import postValidation from "../middlewares/postValidation.js"

const postRouter = Router()

postRouter.post('/post', tokenValidation, postValidation, sendPost)
postRouter.get('/post', tokenValidation, getPost)

export default postRouter