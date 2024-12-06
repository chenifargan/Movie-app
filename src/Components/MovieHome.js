import React, { useContext, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { MoviePopulate, SetMoviePopulate } from "../MoviesContext";

const MovieHome = () => {
  const movie = useContext(MoviePopulate);
  const setMoviePopulate = useContext(SetMoviePopulate);
  const [rating, setRating] = useState(movie.rating);
  console.log(movie);
  const handleRatingChange = (newRating) => {
    setRating(newRating);
    setMoviePopulate((prev) => ({
      ...prev,
      rating: newRating,
    }));
  };

  return (
    <div className="movie-container1">
      <p className="movie-title">Movie Name: {movie.name}</p>
      <div
        className="movie-image"
        style={{
          backgroundImage: `url("${movie.imageUrl}")`,
        }}
      ></div>
      <div className="movie-description">{movie.description}</div>
      <div className="movie-rating">
        <ReactStars
          count={5}
          value={rating}
          onChange={handleRatingChange}
          size={30}
          activeColor="#ffd700"
          isHalf={true}
        />
      </div>
    </div>
  );
};

export default MovieHome;
