import joi from 'joi'
import dayjs from 'dayjs'
import db from '../database/db.js'

export async function sendPost(request, response) {
    
    const { user } = response.locals
    const post = request.body

    await db.collection('posts').insertOne({...post, userId: user._id, date: dayjs().format('DD/MM') })
    return response.status(201).send('OK')
}

export async function getPost(request, response) {
    const {user} = response.locals
    
    const post = await db.collection('posts').find({userId: user._id}).toArray()
    return response.status(200).send(post)
}