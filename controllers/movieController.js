import Movie from "../models/Movie.js";

export const createMovie = async (req, res) => {

    try {

        const movie = await Movie.create(req.body);

        res.status(201).json(movie);

    } catch(error) {

        res.status(500).json({
            message: error.message
        });

    }

};

export const getMovies = async (req, res) => {

    try {

        const keyword = req.query.search
        ? {
            title: {
                $regex: req.query.search,
                $options: "i"
            }
        }
        : {};

        const movies = await Movie.find(keyword);

        res.json(movies);

    } catch(error) {

        res.status(500).json({
            message: error.message
        });

    }

};

export const updateMovie = async (req, res) => {

    try {

        const movie = await Movie.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(movie);

    } catch(error) {

        res.status(500).json({
            message: error.message
        });

    }

};

export const deleteMovie = async (req, res) => {

    try {

        await Movie.findByIdAndDelete(req.params.id);

        res.json({
            message: "Movie Deleted"
        });

    } catch(error) {

        res.status(500).json({
            message: error.message
        });

    }

};