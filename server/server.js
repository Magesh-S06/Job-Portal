import "./config/instrument.js"
import express from 'express'
import cors from 'cors'
import dotenv from "dotenv"
import {connectDB} from "./config/database.js"
import * as Sentry from "@sentry/node"
import { clerkWebhooks } from "./controller/webhooks.controller.js"
import companyRoutes from './routes/companyRoutes.js'
import connectCloudinary from "./config/cloudinary.js"

dotenv.config()

const app = express()

await connectCloudinary()

app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>
    res.send("API Working")
)
app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

app.post('/webhooks',clerkWebhooks)

app.use('/api/company',companyRoutes)

const PORT = process.env.PORT || 5000

Sentry.setupExpressErrorHandler(app)

app.listen(PORT,()=>{
    connectDB()
    console.log(`Server is running on port ${PORT}`)
})