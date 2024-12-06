import React, { useContext } from "react";
import { MoviesContext } from "../MoviesContext";
import Movie from "./Movie";
import { randomMovies } from "../Helper/functions";

const AllMovies = () => {
  const movies = useContext(MoviesContext);
  const randomMovies1 = randomMovies(movies);

  return (
    <div className="main-container">
      <h3>All Movies</h3>
      <div className="all-movies-container">
        {randomMovies1.map((movie) => (
          <Movie key={movie.name} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default AllMovies;
