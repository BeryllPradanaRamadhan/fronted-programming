import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import StyledMovie from "../Movie/Movie.styled";


const DetailMovie = () => {
    const { id } = useParams;
    const [movie, setMovie] = useState("");
    const API_KEY = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        getDetailMovie();
    }, []);

    async function getDetailMovie() {
        const URL = `
        https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos
        `;
        const response = await axios(URL);
        setMovie(response.data)
    }
    
    
    return(
        <StyledMovie>
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
      </StyledMovie>
    )
}

export default DetailMovie;