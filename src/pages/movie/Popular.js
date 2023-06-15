import axios from "axios";
import { useState, useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINT from "../../components/utils/constants/endpoints";

function PopularMovie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies();
  }, []);

  async function getPopularMovies() {
    const response = await axios(ENDPOINT.POPULAR);
    setMovies(response.data.results);
  }

  return (
    <>
      <Hero />
      <Movies title="Popular Movies" movies={movies} />
    </>
  );
}

export default PopularMovie;
