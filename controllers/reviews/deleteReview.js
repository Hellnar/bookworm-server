import { Review } from "../../models/Review.js"

export async function deleteReview(req, res) {
    console.log(req.body.id)
    await Review.deleteOne({_id: req.body.id})
    res.json({msg: "Deleted"})
}