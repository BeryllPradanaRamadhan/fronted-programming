import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie/DetailMovie";
import Movies from "../../components/Movies/Movies";
import ENDPOINT from "../../components/utils/constants/endpoints";

function Detail() {
  const [movies, setMovies] = useState([]);
  const { id } = useParams();
 
  useEffect(() => {
    getRecommendationMovies();
  }, []);

  async function getRecommendationMovies() {
    const response = await axios(ENDPOINT.RECOMMENDATION(id));

    setMovies(response.data.results);
  }

  return (
    <>
      <DetailMovie />
      <Movies movies={movies} />
    </>
  );
}

export default Detail;
