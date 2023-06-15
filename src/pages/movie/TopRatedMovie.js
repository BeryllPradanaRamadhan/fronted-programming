import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINT from "../../components/utils/constants/endpoints";

function TopRatedMovie() {
  const [TopRated, setTopRated] = useState([]);

  async function TopRatedMovie() {
    const response = await axios(ENDPOINT.TOP_RATED);
    setTopRated(response.data.results);
  }

  useEffect(() => {
    TopRatedMovie();
  }, []);

  return (
    <>
      <Hero />
      <Movies title="Top Rated" movies={TopRated} />
    </>
  );
}

export default TopRatedMovie;
