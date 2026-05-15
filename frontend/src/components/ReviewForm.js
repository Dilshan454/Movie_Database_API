import React, { useState } from "react";
import axios from "axios";

function ReviewForm() {

    const [review, setReview] = useState({
        userName:"",
        movieTitle:"",
        comment:"",
        stars:""
    });

    const handleChange = (e) => {

        setReview({
            ...review,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        await axios.post(
            "http://localhost:5000/api/reviews",
            review
        );

        alert("⭐ Review Added Successfully");

        setReview({
            userName:"",
            movieTitle:"",
            comment:"",
            stars:""
        });

    };

    return (

        <div className="glass-card">

            <h2 className="form-title">
                ⭐ Add Movie Review
            </h2>

            <form className="modern-form" onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="userName"
                    placeholder="Your Name"
                    value={review.userName}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="movieTitle"
                    placeholder="Movie Title"
                    value={review.movieTitle}
                    onChange={handleChange}
                />

                <textarea
                    name="comment"
                    placeholder="Write Your Review..."
                    value={review.comment}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="stars"
                    placeholder="Stars (1-5)"
                    value={review.stars}
                    onChange={handleChange}
                />

                <button type="submit">
                    ⭐ Submit Review
                </button>

            </form>

        </div>

    );

}

export default ReviewForm;