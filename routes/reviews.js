import express from "express"
import { getReviews } from "../controllers/reviews/getReviews.js"
import { getReview } from "../controllers/reviews/getReview.js"
import { addReview } from "../controllers/reviews/addReview.js"
import { deleteReview } from "../controllers/reviews/deleteReview.js"

export const reviewsRouter = express.Router()

reviewsRouter.get("/", (req, res) => getReviews(req, res))
reviewsRouter.get("/:reviewID", (req, res) => getReview(req, res))
reviewsRouter.post("/", (req, res) => addReview(req, res))
reviewsRouter.delete("/", (req, res) => deleteReview(req, res))