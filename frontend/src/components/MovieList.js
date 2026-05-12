import React from "react";
import axios from "axios";

function MovieList({ movies, fetchMovies }) {

    const deleteMovie = async (id) => {

        await axios.delete(
            `http://localhost:5000/api/movies/${id}`
        );

        fetchMovies();

    };

    return (

        <div className="movie-grid">

            {movies.map((movie) => (

                <div className="card" key={movie._id}>

                    <h3>{movie.title}</h3>

                    <p>{movie.genre}</p>

                    <p>{movie.director}</p>

                    <p>{movie.rating}</p>

                    <p>{movie.year}</p>

                    <p>{movie.description}</p>

                    <button onClick={() => deleteMovie(movie._id)}>
                        Delete
                    </button>

                </div>

            ))}

        </div>

    );

}

export default MovieList;