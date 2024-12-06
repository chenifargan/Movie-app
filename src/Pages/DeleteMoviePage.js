import React, { useContext, useState } from "react";
import { MoviesContext, SetMoviesContext } from "../MoviesContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const DeleteMoviePage = () => {
  const [name, setName] = useState("");
  const allMovies = useContext(MoviesContext);
  const setAllMovies = useContext(SetMoviesContext);
  const deleteMovie = () => {
    const isNameExists = allMovies.some(
      (movie) => movie.name.toLowerCase() === name.toLowerCase()
    );
    if (isNameExists) {
      const updateMovies = allMovies.filter(
        (movie) => movie.name.toLowerCase() !== name.toLowerCase()
      );
      setAllMovies(updateMovies);
      toast.success("Delete movie");
    } else {
      toast.error("The movie does not exist ");
    }
  };
  return (
    <div className="movie-container2">
      <h2>Delete a movie</h2>
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
      <button className="btn" onClick={deleteMovie}>
        Delete Movie
      </button>
      <ToastContainer />
    </div>
  );
};

export default DeleteMoviePage;
