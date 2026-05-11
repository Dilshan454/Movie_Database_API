import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({

    userName: String,

    movieTitle: String,

    comment: String,

    stars: Number

});

export default mongoose.model("Review", reviewSchema);