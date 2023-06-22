import axios from "axios";
import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINT from "../../components/utils/constants/endpoints";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/movieSlice";

function NowPlayingMovie() {
  const dispatch = useDispatch();

  useEffect(() => {
    NowPlayingMovie();
  }, []);

  async function NowPlayingMovie() {
    const response = await axios(ENDPOINT.NOW_PLAYING);
    dispatch(updateMovies(response.data.results));
  }

  return (
    <>
      <Hero />
      <Movies title="Now Playing" />
    </>
  );
}

export default NowPlayingMovie;
