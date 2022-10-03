import { Review } from "../../models/Review.js"

export async function getReview(req, res) {

    const reviews = await Review.find({_id: req.params.reviewID})
    res.json(JSON.stringify(reviews))
}