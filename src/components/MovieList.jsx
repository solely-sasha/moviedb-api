import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { useNavigate } from "react-router-dom";

export default function MovieList({ movies }) {
  const { setSelectedMovie } = useContext(MovieContext);
  const navigate = useNavigate();

  const handleClick = (movie) => {
    setSelectedMovie(movie);
    navigate(`/movies/${movie.id}`);
  };
  return (
    <div className="movie-list">
      {movies.map((movie) => {
        return (
          <div
            className="movies-container"
            key={movie.id}
            onClick={() => handleClick(movie)}
          >
            <h2 className="movie-title">{movie.title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="img-list"
            />
          </div>
        );
      })}
    </div>
  );
}
