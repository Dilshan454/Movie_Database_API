import React, { useEffect, useState } from "react";
import axios from "axios";

import MovieForm from "../components/MovieForm";
import MovieList from "../components/MovieList";
import ReviewForm from "../components/ReviewForm";

function Dashboard() {

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");

    const fetchMovies = async () => {

        const res = await axios.get(
            `http://localhost:5000/api/movies?search=${search}`
        );

        setMovies(res.data);

    };

   useEffect(() => {

    fetchMovies();

// eslint-disable-next-line

}, [search]);

    return (

    <div className="dashboard">

        <div className="top-bar">

            <h1 className="dashboard-title">
                🎬 Smart Movie Dashboard
            </h1>

            <input
                className="search-box"
                type="text"
                placeholder="Search Movies..."
                onChange={(e) => setSearch(e.target.value)}
            />

        </div>

        <div className="form-container">

            <MovieForm fetchMovies={fetchMovies} />

            <ReviewForm />

        </div>

        <MovieList
            movies={movies}
            fetchMovies={fetchMovies}
        />

    </div>

);
}

export default Dashboard;