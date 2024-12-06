import React, { useContext, useState } from "react";
import { SetMoviesContext } from "../MoviesContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { capitalizeWords } from "../Helper/functions";
const AddMoviePage = () => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const setMovies = useContext(SetMoviesContext);

  const addMovie = () => {
    if (!name.trim() || !description.trim()) {
      toast.error("Name and description are required!", {
        position: "top-right",
      });
      return;
    }
    if (description.length > 200) {
      toast.error("You can enter up to 200 characters.", {
        position: "top-right",
      });
      return;
    }

    const movie = {
      name: capitalizeWords(name),
      imageUrl: url,
      description: description,
      rating: 0,
    };
    setMovies((prev) => [...prev, movie]);
    toast.success("Movie added successfully!", { position: "top-right" });
    setName("");
    setDescription("");
    setUrl("");
  };
  return (
    <div className="movie-container2">
      <h2 className="title">Add a new movie</h2>
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
      <div className="form-group">
        <label htmlFor="movie-url">Movie Picture URL</label>
        <input
          id="movie-url"
          className="input"
          placeholder="Enter movie picture URL"
          value={url}
          type="text"
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="movie-description">Description</label>
        <textarea
          id="movie-description"
          className="textarea"
          placeholder="Enter movie description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <button className="btn" onClick={addMovie}>
        Add Movie
      </button>
      <ToastContainer />
    </div>
  );
};

export default AddMoviePage;
