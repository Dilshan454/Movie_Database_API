import React, { useState } from "react";
import axios from "axios";

function MovieForm({ fetchMovies }) {

    const [movie, setMovie] = useState({
        title:"",
        genre:"",
        director:"",
        rating:"",
        year:"",
        description:""
    });

    const handleChange = (e) => {

        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        await axios.post(
            "http://localhost:5000/api/movies",
            movie
        );

        fetchMovies();

        alert("Movie Added");

    };

    return (

        <form onSubmit={handleSubmit}>

            <input name="title" placeholder="Title" onChange={handleChange} />

            <input name="genre" placeholder="Genre" onChange={handleChange} />

            <input name="director" placeholder="Director" onChange={handleChange} />

            <input name="rating" placeholder="Rating" onChange={handleChange} />

            <input name="year" placeholder="Year" onChange={handleChange} />

            <input name="description" placeholder="Description" onChange={handleChange} />

            <button type="submit">
                Add Movie
            </button>

        </form>

    );

}

export default MovieForm;