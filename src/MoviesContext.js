import React, { createContext, useState } from "react";
import { capitalizeWords } from "./Helper/functions";
export const MoviesContext = createContext();
export const SetMoviesContext = createContext();
export const MoviePopulate = createContext();
export const SetMoviePopulate = createContext();

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([
    {
      name: capitalizeWords("INCEPTION"),
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
      description: capitalizeWords(
        "A THIEF WHO STEALS CORPORATE SECRETS THROUGH THE USE OF DREAM-SHARING TECHNOLOGY IS GIVEN THE INVERSE TASK OF PLANTING AN IDEA INTO THE MIND OF A CEO."
      ),
      rating: (Math.random() * 4 + 1).toFixed(1),
    },
    {
      name: capitalizeWords("THE DARK KNIGHT"),
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
      description: capitalizeWords(
        "WHEN THE MENACE KNOWN AS THE JOKER EMERGES FROM HIS MYSTERIOUS PAST, HE WREAKS HAVOC AND CHAOS ON THE PEOPLE OF GOTHAM. THE DARK KNIGHT MUST ACCEPT ONE OF THE GREATEST PSYCHOLOGICAL AND PHYSICAL TESTS OF HIS ABILITY TO FIGHT INJUSTICE."
      ),
      rating: (Math.random() * 4 + 1).toFixed(1),
    },
    {
      name: capitalizeWords("INTERSTELLAR"),
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      description: capitalizeWords(
        "A TEAM OF EXPLORERS TRAVEL THROUGH A WORMHOLE IN SPACE IN AN ATTEMPT TO ENSURE HUMANITY'S SURVIVAL."
      ),
      rating: (Math.random() * 4 + 1).toFixed(1),
    },
    {
      name: capitalizeWords("THE MATRIX"),
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      description: capitalizeWords(
        "A COMPUTER HACKER LEARNS FROM MYSTERIOUS REBELS ABOUT THE TRUE NATURE OF HIS REALITY AND HIS ROLE IN THE WAR AGAINST ITS CONTROLLERS."
      ),
      rating: (Math.random() * 4 + 1).toFixed(1),
    },
    {
      name: capitalizeWords("AVATAR"),
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BNmQxNjZlZTctMWJiMC00NGMxLWJjNTctNTFiNjA1Njk3ZDQ5XkEyXkFqcGc@._V1_.jpg",
      description: capitalizeWords(
        "A PARAPLEGIC MARINE DISPATCHED TO THE MOON PANDORA ON A UNIQUE MISSION BECOMES TORN BETWEEN FOLLOWING HIS ORDERS AND PROTECTING THE WORLD HE FEELS IS HIS HOME."
      ),
      rating: (Math.random() * 4 + 1).toFixed(1),
    },
    {
      name: capitalizeWords("TITANIC"),
      imageUrl:
        "https://m.media-amazon.com/images/I/81CVRAQi46L._AC_UF1000,1000_QL80_.jpg",
      description: capitalizeWords(
        "A SEVENTEEN-YEAR-OLD ARISTOCRAT FALLS IN LOVE WITH A KIND BUT POOR ARTIST ABOARD THE LUXURIOUS, ILL-FATED R.M.S. TITANIC."
      ),
      rating: (Math.random() * 4 + 1).toFixed(1),
    },
    {
      name: capitalizeWords("PULP FICTION"),
      imageUrl:
        "https://musicart.xboxlive.com/7/767c6300-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
      description: capitalizeWords(
        "THE LIVES OF TWO MOB HITMEN, A BOXER, A GANGSTER AND HIS WIFE, AND A PAIR OF DINER BANDITS INTERTWINE IN FOUR TALES OF VIOLENCE AND REDEMPTION."
      ),
      rating: (Math.random() * 4 + 1).toFixed(1),
    },
    {
      name: capitalizeWords("GLADIATOR"),
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:1400/0*TxZdqJf0MQ2mdL9p.jpg",
      description: capitalizeWords(
        "A FORMER ROMAN GENERAL SETS OUT TO EXACT VENGEANCE AGAINST THE CORRUPT EMPEROR WHO MURDERED HIS FAMILY AND SENT HIM INTO SLAVERY."
      ),
      rating: (Math.random() * 4 + 1).toFixed(1),
    },
    {
      name: capitalizeWords("FORREST GUMP"),
      imageUrl:
        "https://m.media-amazon.com/images/I/91++WV6FP4L._AC_UF1000,1000_QL80_.jpg",
      description: capitalizeWords(
        "THE PRESIDENCIES OF KENNEDY AND JOHNSON, THE EVENTS OF VIETNAM, WATERGATE, AND OTHER HISTORY UNFOLD THROUGH THE PERSPECTIVE OF AN ALABAMA MAN WITH AN IQ OF 75."
      ),
      rating: (Math.random() * 4 + 1).toFixed(1),
    },
  ]);
  const popularMovie = movies.reduce((prev, current) => {
    return parseFloat(prev.rating) > parseFloat(current.rating)
      ? prev
      : current;
  });

  const [movie, setMovie] = useState(popularMovie);

  return (
    <MoviesContext.Provider value={movies}>
      <SetMoviesContext.Provider value={setMovies}>
        <MoviePopulate.Provider value={movie}>
          <SetMoviePopulate.Provider value={setMovie}>
            {children}
          </SetMoviePopulate.Provider>
        </MoviePopulate.Provider>
      </SetMoviesContext.Provider>
    </MoviesContext.Provider>
  );
};
