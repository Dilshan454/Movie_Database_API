import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  director: String,
  year: Number,
  genre: String,
  rating: { type: Number, min: 0, max: 10 }
}, { timestamps: true });

const Movie=mongoose.model("Movie",movieSchema);
export default Movie;