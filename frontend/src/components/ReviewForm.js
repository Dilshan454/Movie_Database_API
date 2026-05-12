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

        alert("Review Added");

    };

    return (

        <form onSubmit={handleSubmit}>

            <input
                name="userName"
                placeholder="Your Name"
                onChange={handleChange}
            />

            <input
                name="movieTitle"
                placeholder="Movie Title"
                onChange={handleChange}
            />

            <input
                name="comment"
                placeholder="Comment"
                onChange={handleChange}
            />

            <input
                name="stars"
                placeholder="Stars"
                onChange={handleChange}
            />

            <button type="submit">
                Add Review
            </button>

        </form>

    );

}

export default ReviewForm;