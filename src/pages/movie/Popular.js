import axios from "axios";
import { useState, useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";

function PopularMovie() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies();
  }, []); // Perhatikan bahwa array dependensi diubah menjadi []

  async function getPopularMovies() {
    const response = await axios.get(URL);
    setMovies(response.data.results); // Perhatikan bahwa property "result" diubah menjadi "results"
  }

  return (
    <>
      <Hero />
      <Movies movies={movies} />
    </>
  );
}

export default PopularMovie;
