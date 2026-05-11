import Review from "../models/Review.js";

export const addReview = async (req , res) => {

    try{
        const review = await Review.create(req.body);

        res.status(201).json(review);
    }catch{
        res.status(500).json({
            message: error.message
        });

    }

};

export const getReviews = async(req , res) => {
    try{
        const reviews = await Review.find();

        res.json(reviews);

    }catch{

        res.status(500).json({
            message: error.message
        });

    }

};