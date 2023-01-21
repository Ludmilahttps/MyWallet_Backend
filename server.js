import express from "express"
import { MongoClient, ObjectId } from "mongodb"
import dotenv from "dotenv"
import cors from "cors"
import joi from "joi"
import bcrypt from "bcrypt"
import { v4 as uuidV4 } from 'uuid'

const server = express();
dotenv.config();
server.use(cors());
server.use(express.json());

const mongoClient = new MongoClient(process.env.MONGO_URI)
let db

try {
await mongoClient.connect()
} catch (error) {
console.log("Erro no mongo.conect", error.message)
}

db = mongoClient.db("DIRETORIO")
const talCollection = db.collection("COLLECTION")

const port = 5000;
server.listen(port, () => console.log(`Server running in port: ${port}`))