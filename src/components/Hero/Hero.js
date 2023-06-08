import { useState, useEffect } from "react";
import StyledHero from "./Hero.styled";
import Button from "../ui/button/Button";
import axios from "axios";

function Hero() {
  const [movie, setMovie] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;

  useEffect(() => {
    getDetailMovie();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getTrendingMovie() {
    const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
    const response = await axios(URL);
    return response.data.results[0];
  }

  async function getDetailMovie() {
    const trendingMovie = await getTrendingMovie();
    const id = trendingMovie.id;
    const URL = `
    https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos
    `;
    const response = await axios(URL);
    setMovie(response.data)
  }

  

  return (
    <StyledHero>
      <div>
        <section>
          <div>
            <h2>{movie.title}</h2>
            <h3>{genres}</h3>
            <p>{movie.overview}</p>
            <Button as="a" href={trailer} target="_blank" variant="primary" size="md">
              watch
            </Button>
          </div>
          <div>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.Title} />
          </div>
        </section>
      </div>
    </StyledHero>
  );
}

export default Hero;
