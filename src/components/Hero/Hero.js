import { useState, useEffect } from "react";
import StyledHero from "./Hero.styled";
import Button from "../ui/button/Button";
import axios from "axios";
import ENDPOINT from "../utils/constants/endpoints";
import { useParams } from "react-router-dom";

function Hero() {
  const [movie, setMovie] = useState("");
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;

  useEffect(() => {
    getDetailMovie();
  }, []);

  async function getTrendingMovie() {
    const response = await axios(ENDPOINT.HERO);
    return response.data.results[0];
  }

  async function getDetailMovie() {
    const trendingMovie = await getTrendingMovie();
    const id = trendingMovie.id;
    const response = await axios(ENDPOINT.DETAIL(id));
    setMovie(response.data)
  }

  return (
    <StyledHero>
      <div>
        <section>
          <div className="hero__left">
            <h2>{movie.title}</h2>
            <h3>{genres}</h3>
            <p>{movie.overview}</p>
            <Button as="a" href={trailer} target="_blank" variant="primary" size="md">
              watch
            </Button>
          </div>
          <div className="hero__right">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.Title} />
          </div>
        </section>
      </div>
    </StyledHero>
  );
}

export default Hero;
