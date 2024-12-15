import React, { createContext, useState } from "react";

export const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <MovieContext.Provider
      value={{ movies, setMovies, selectedMovie, setSelectedMovie }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
