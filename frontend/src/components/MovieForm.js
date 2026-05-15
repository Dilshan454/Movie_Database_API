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

        alert("🎬 Movie Added Successfully");

        fetchMovies();

        setMovie({
            title:"",
            genre:"",
            director:"",
            rating:"",
            year:"",
            description:""
        });

    };

    return (

        <div className="glass-card">

            <h2 className="form-title">
                🎬 Add New Movie
            </h2>

            <form className="modern-form" onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="title"
                    placeholder="Movie Title"
                    value={movie.title}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="genre"
                    placeholder="Genre"
                    value={movie.genre}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="director"
                    placeholder="Director Name"
                    value={movie.director}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="rating"
                    placeholder="Rating"
                    value={movie.rating}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="year"
                    placeholder="Release Year"
                    value={movie.year}
                    onChange={handleChange}
                />

                <textarea
                    name="description"
                    placeholder="Movie Description"
                    value={movie.description}
                    onChange={handleChange}
                />

                <button type="submit">
                    ➕ Add Movie
                </button>

            </form>

        </div>

    );

}

export default MovieForm;