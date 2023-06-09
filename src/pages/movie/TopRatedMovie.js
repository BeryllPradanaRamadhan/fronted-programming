import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";

function TopRatedMovie() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

  const [TopRated, setTopRated] = useState([]);

  async function TopRatedMovie() {
    const response = await axios(URL);
    setTopRated(response.data.results);
  }

  useEffect(() => {
    TopRatedMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Hero />
      <Movies movies={TopRated} />
    </>
  );
}

export default TopRatedMovie;
