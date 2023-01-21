import db from "../database/db.js"

export default async function tokenValidationMiddleware(request, response, next) {
    
    const { authorization } = request.headers
    const token = authorization?.replace('Bearer ', '')
    
    if (!token) {
      return response.status(401).send('Unauthorized')
    }
  
    const session = await db.collection('sessions').findOne({ token })
    
    if (!session) {
      return response.status(401).send('Unauthorized')
    }
  
    const user = await db.collection('users').findOne({ _id: session.userId })
    
    if (!user) {
      return response.status(401).send('Unauthorized')
    }

    response.locals.session = session
    response.locals.user = user
    next()

  }