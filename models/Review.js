import mongoose from "mongoose"
const { Schema } = mongoose

const reviewSchema = new Schema({
    title: String,
    author: String,
    rating: Number,
    review: String,
    date: Number
})

export const Review = mongoose.model('reviews', reviewSchema)