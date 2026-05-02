import Movie  from "../models/movie.js";

export const addMovie = async (req,res) => {
    try {
        const movie = await Movie.create(req.body);
        res.status(201).json(movie);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

export const getMovies = async (req,res) => {
    
}