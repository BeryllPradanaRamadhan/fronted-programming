import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../ui/button/Button";
import StyledDetailMovie from "./DetailMovie.Styled";
import ENDPOINT from "../utils/constants/endpoints";

const DetailMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState("");
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const idTrailer = movie && movie.videos.results[0].key;
  const trailer = movie && `https://www.youtube.com/watch?v=${idTrailer}`;

  useEffect(() => {
    getDetailMovie();
  }, [id]);

  console.log(id);

  async function getDetailMovie() {
    const response = await axios(ENDPOINT.DETAIL(id));
    setMovie(response.data);
  }

  return (
    <StyledDetailMovie>
      <div className="poster">
        <img
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className="info">
        <h2>{movie.title}</h2>
        <h3>{genres}</h3>
        <p>{movie.overview}</p>
        <Button as="a" href={trailer}>
          Wacth
        </Button>
      </div>
    </StyledDetailMovie>
  );
};

export default DetailMovie;
