import React, { useContext, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { MoviesContext, SetMoviePopulate } from "../MoviesContext";
import MovieHome from "../Components/MovieHome";
const SearchMoviePage = () => {
  const [name, setName] = useState("");
  const [which, setWhich] = useState(0);
  const setMoviePopulate = useContext(SetMoviePopulate);
  const movies = useContext(MoviesContext);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const searchMovie = () => {
    const matchingMovies = movies.filter((movie) =>
      movie.name.toLowerCase().includes(name.toLowerCase())
    );
    if (matchingMovies.length === 0) {
      toast.error("No such movie found.");
    }
    if (matchingMovies.length === 1) {
      setMoviePopulate(matchingMovies[0]);
      setWhich(1);
    }
    if (matchingMovies.length > 1) {
      setWhich(2);
    }
  };
  const handleSelectMovie = (event) => {
    const selected = movies.find((movie) => movie.name === event.target.value);
    setMoviePopulate(selected);
    setWhich(1);
    setSelectedMovie(selected);
  };
  return (
    <div className="home-container4">
      <div className="movie-home-container">{which === 1 && <MovieHome />}</div>
      {which === 2 && (
        <div className="select-container">
          <label htmlFor="movie-select">Choose a movie:</label>
          <select id="movie-select" onChange={handleSelectMovie}>
            {movies
              .filter((movie) =>
                movie.name.toLowerCase().includes(name.toLowerCase())
              )
              .map((movie) => (
                <option key={movie.name} value={movie.name}>
                  {movie.name}
                </option>
              ))}
          </select>
        </div>
      )}
      <div className="movie-container5">
        <div className="form-group">
          <label htmlFor="movie-name">Movie Name</label>
          <input
            id="movie-name"
            className="input"
            placeholder="Enter movie name"
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button className="btn" onClick={searchMovie}>
          Search Movie
        </button>
      </div>

      <ToastContainer />
    </div>
  );
};

export default SearchMoviePage;
