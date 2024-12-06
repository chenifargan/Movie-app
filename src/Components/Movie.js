import React, { useContext } from "react";
import { SetMoviePopulate } from "../MoviesContext";

const Movie = ({ movie }) => {
  const setMovie = useContext(SetMoviePopulate);
  const movieClick = () => {
    setMovie(movie);
  };

  return (
    <div
      onClick={movieClick}
      className="container-movie"
      style={{ backgroundImage: `url(${movie.imageUrl})` }}
    >
      <p>{movie.name}</p>
    </div>
  );
};

export default Movie;
