import React, { useContext, useEffect } from "react";
import { MovieContext } from "../context/MovieContext";
import MovieList from "../components/MovieList";
import axios from "axios";

export default function Movies() {
  const { movies, setMovies } = useContext(MovieContext);
  const API_KEY = "fdc90cb87228c7daa1d86410f6d18f3d";
  const BASE_URL = "https://api.themoviedb.org/3";
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      setMovies(response.data.results);
    };
    fetchMovies();
  }, [setMovies]);

  return (
    <div className = "movie-list-div">
      <h1>Popular Movies</h1>
      <MovieList movies={movies} />
   
    </div>
  );
}
