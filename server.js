import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import { reviewsRouter } from "./routes/reviews.js"

const app = express()
app.use(cors())
dotenv.config()
app.use(express.json())

app.use("/api/reviews", reviewsRouter)

mongoose.connect(process.env.MONGO_DB, () => {
    console.log(`Connected to DB`)
    app.listen(3000, () => {
        console.log(`Server is running`)
    })
})