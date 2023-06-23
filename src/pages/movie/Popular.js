import axios from "axios";
import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINT from "../../components/utils/constants/endpoints";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/movieSlice";

function PopularMovie() {
  const dispatch = useDispatch();

  useEffect(() => {
    getPopularMovies();
  }, []);

  async function getPopularMovies() {
    const response = await axios(ENDPOINT.POPULAR);
    dispatch(updateMovies(response.data.results));
  }

  return (
    <>
      <Hero />
      <Movies title="Popular Movies" />
    </>
  );
}

export default PopularMovie;
