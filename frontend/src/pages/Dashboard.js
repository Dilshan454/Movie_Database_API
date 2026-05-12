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

        <div className="container">

            <h1>Smart Movie System</h1>

            <input
                type="text"
                placeholder="Search Movie"
                onChange={(e) => setSearch(e.target.value)}
            />

            <MovieForm fetchMovies={fetchMovies} />

            <ReviewForm />

            <MovieList
                movies={movies}
                fetchMovies={fetchMovies}
            />

        </div>

    );

}

export default Dashboard;