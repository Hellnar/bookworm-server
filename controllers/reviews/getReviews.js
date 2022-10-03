import { Review } from "../../models/Review.js"

export async function getReviews(req, res) {
    const reviews = await Review.find({})
    res.json(JSON.stringify(reviews))
}