import React, { useState } from "react";
import axios from "axios";

function MovieList({ movies, fetchMovies }) {

    const [editingMovie, setEditingMovie] = useState(null);

    const [updatedMovie, setUpdatedMovie] = useState({
        title:"",
        genre:"",
        director:"",
        rating:"",
        year:"",
        description:""
    });

    // DELETE MOVIE

    const deleteMovie = async (id) => {

        await axios.delete(
            `http://localhost:5000/api/movies/${id}`
        );

        alert("Movie Deleted");

        fetchMovies();
    };

    // OPEN EDIT FORM

    const handleEdit = (movie) => {

        setEditingMovie(movie._id);

        setUpdatedMovie({
            title:movie.title,
            genre:movie.genre,
            director:movie.director,
            rating:movie.rating,
            year:movie.year,
            description:movie.description
        });
    };

    // UPDATE INPUT

    const handleChange = (e) => {

        setUpdatedMovie({
            ...updatedMovie,
            [e.target.name]: e.target.value
        });
    };

    // UPDATE MOVIE

    const updateMovie = async (id) => {

        await axios.put(
            `http://localhost:5000/api/movies/${id}`,
            updatedMovie
        );

        alert("Movie Updated");

        setEditingMovie(null);

        fetchMovies();
    };

    return (

        <div className="movie-grid">

            {movies.map((movie) => (

                <div className="movie-card" key={movie._id}>

                    <div className="movie-banner">
                        🎥
                    </div>

                    <div className="movie-content">

                        {editingMovie === movie._id ? (

                            <>

                                <input
                                    type="text"
                                    name="title"
                                    value={updatedMovie.title}
                                    onChange={handleChange}
                                />

                                <input
                                    type="text"
                                    name="genre"
                                    value={updatedMovie.genre}
                                    onChange={handleChange}
                                />

                                <input
                                    type="text"
                                    name="director"
                                    value={updatedMovie.director}
                                    onChange={handleChange}
                                />

                                <input
                                    type="number"
                                    name="rating"
                                    value={updatedMovie.rating}
                                    onChange={handleChange}
                                />

                                <input
                                    type="number"
                                    name="year"
                                    value={updatedMovie.year}
                                    onChange={handleChange}
                                />

                                <textarea
                                    name="description"
                                    value={updatedMovie.description}
                                    onChange={handleChange}
                                />

                                <button
                                    className="update-btn"
                                    onClick={() => updateMovie(movie._id)}
                                >
                                    Save Changes
                                </button>

                            </>

                        ) : (

                            <>

                                <h2>{movie.title}</h2>

                                <p>
                                    <b>Genre:</b> {movie.genre}
                                </p>

                                <p>
                                    <b>Director:</b> {movie.director}
                                </p>

                                <p>
                                    <b>Year:</b> {movie.year}
                                </p>

                                <p>{movie.description}</p>

                                <div className="movie-rating">
                                    ⭐ {movie.rating}/10
                                </div>

                                <button
                                    className="update-btn"
                                    onClick={() => handleEdit(movie)}
                                >
                                    Update Movie
                                </button>

                                <button
                                    className="delete-btn"
                                    onClick={() => deleteMovie(movie._id)}
                                >
                                    Delete Movie
                                </button>

                            </>

                        )}

                    </div>

                </div>

            ))}

        </div>

    );
}

export default MovieList;