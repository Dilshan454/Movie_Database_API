import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";

import MovieForm from "../components/MovieForm";
import MovieList from "../components/MovieList";
import ReviewForm from "../components/ReviewForm";

function Dashboard() {

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const [sortType, setSortType] = useState("");

    // FETCH MOVIES
    const fetchMovies = useCallback(async () => {
        try {
            const response = await axios.get(
                `http://localhost:5000/api/movies?search=${search}`
            );

            setMovies(response.data);

        } catch (error) {
            console.log("Error fetching movies:", error);
        }

    }, [search]);

    useEffect(() => {
        fetchMovies();
    }, [fetchMovies]);

    // SORT MOVIES
    const sortedMovies = [...movies].sort((a, b) => {

        if (sortType === "rating") {
            return b.rating - a.rating;
        }

        if (sortType === "year") {
            return b.year - a.year;
        }

        if (sortType === "title") {
            return a.title.localeCompare(b.title);
        }

        return 0;
    });

    // TOP RATED MOVIE
    const topMovie = movies.length > 0
        ? movies.reduce((prev, current) =>
            prev.rating > current.rating ? prev : current
        )
        : null;

    return (
        <div className="dashboard">

            {/* NAVBAR */}
            <div className="navbar">

                <div className="logo">
                    🎬 MovieFlix Dashboard
                </div>

                <div>

                    <input
                        className="search-input"
                        type="text"
                        placeholder="Search Movies..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <select
                        className="sort-select"
                        onChange={(e) => setSortType(e.target.value)}
                        value={sortType}
                    >

                        <option value="">
                            Sort Movies
                        </option>

                        <option value="rating">
                            Highest Rating
                        </option>

                        <option value="year">
                            Latest Movies
                        </option>

                        <option value="title">
                            A-Z
                        </option>

                    </select>

                </div>

            </div>

            {/* STATS */}
            <div className="stats-container">

                <div className="stat-card">
                    <h2>{movies.length}</h2>
                    <p>Total Movies</p>
                </div>

                <div className="stat-card">
                    <h2>
                        ⭐ {topMovie ? topMovie.rating : 0}
                    </h2>
                    <p>Top Rating</p>
                </div>

                <div className="stat-card">
                    <h2>
                        🎥 {topMovie ? topMovie.title : "No Movies"}
                    </h2>
                    <p>Trending Movie</p>
                </div>

            </div>

            {/* FORMS */}
            <div className="form-section">

                <MovieForm fetchMovies={fetchMovies} />

                <ReviewForm />

            </div>

            {/* MOVIES */}
            <MovieList
                movies={sortedMovies}
                fetchMovies={fetchMovies}
            />

        </div>
    );
}

export default Dashboard;