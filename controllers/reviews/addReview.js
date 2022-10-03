import { Review } from "../../models/Review.js"

export async function addReview(req, res) {
    Review.create({
        title: req.body.title,
        author: req.body.author,
        rating: req.body.rating,
        review: req.body.review,
        date: req.body.date
    }, err => {
        if(err) {
            console.log(err)
            res.json({err: err})
        } else {
            console.log(`Review added`)
            res.json({msg: "Review added"})
        }
    })
}