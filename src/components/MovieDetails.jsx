import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

export default function MovieDetails() {
  const { selectedMovie } = useContext(MovieContext);

  return (
    <div className="movie-details">
      <img
        src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
        alt={selectedMovie.title}
        className="movie-details-img"
      />
      <div className="movie-info">
        <h1>{selectedMovie.title}</h1>
        <p>{selectedMovie.overview}</p>
      </div>
    </div>
  );
}
