import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINT from "../../components/utils/constants/endpoints";

function NowPlayingMovie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    NowPlayingMovie();
  }, []);

  async function NowPlayingMovie() {
    const response = await axios(ENDPOINT.NOW_PLAYING);
    setMovies(response.data.results);
  }

  return (
    <>
      <Hero />
      <Movies title="Now Playing" movies={movies} />
    </>
  );
}

export default NowPlayingMovie;
