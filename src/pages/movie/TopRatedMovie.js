import axios from "axios";
import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINT from "../../components/utils/constants/endpoints";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/movieSlice";

function TopRatedMovie() {
  const dispatch = useDispatch();

  async function TopRatedMovie() {
    const response = await axios(ENDPOINT.TOP_RATED);
    dispatch(updateMovies(response.data.results));
  }

  useEffect(() => {
    TopRatedMovie();
  }, []);

  return (
    <>
      <Hero />
      <Movies title="Top Rated" />
    </>
  );
}

export default TopRatedMovie;
