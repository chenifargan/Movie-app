import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AddMoviePage from "./Pages/AddMoviePage";
import DeleteMoviePage from "./Pages/DeleteMoviePage";
import SearchMoviePage from "./Pages/SearchMoviePage";
import { createContext, useContext } from "react";
import { MoviesContext } from "./MoviesContext";
import Movie from "./Components/Movie";

function App() {
  const movies = useContext(MoviesContext);
  console.log(movies);
  if (!movies || movies.length === 0) {
    return <p>No movies available</p>; // Render a fallback message
  }
  return (
    <div>
      <nav>
        <h1 style={{ color: "white", fontSize: "48px" }}>Best Movie</h1>
        <div className="nav-link">
          <Link to="/">Home</Link>
          <Link to="/add-movie">Add Movie</Link>
          <Link to="/delete-movie">Delete Movie</Link>
          <Link to="/search-movie">Search Movie</Link>
        </div>

        <hr />

        <div className="container-movies-app">
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/add-movie" element={<AddMoviePage />}></Route>
        <Route path="/delete-movie" element={<DeleteMoviePage />}></Route>
        <Route path="/search-movie" element={<SearchMoviePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
