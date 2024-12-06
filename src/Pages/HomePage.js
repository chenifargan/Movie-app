import React, { useContext } from "react";
import AllMovies from "../Components/AllMovies";
import MovieHome from "../Components/MovieHome";

const HomePage = () => {
  return (
    <div>
      <div className="home-container">
        <MovieHome />
        <div className="all-movies-container">
          <AllMovies />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
