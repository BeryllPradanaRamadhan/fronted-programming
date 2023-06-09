import { Link } from "react-router-dom";
import StyledMovie from "./Movie.styled";

// tangkap props
function Movie(props) {
//   Destructing object props
const { movie } = props;

    return (
      <StyledMovie>
    <div>
      <img
        src={movie.poster||`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
        alt=""
      />
      <Link to={`/movie/${movie.id}`}>
      <h3>{movie.title}</h3>
      </Link>
    <p>{movie.year}</p>
    </div>
    </StyledMovie>
  );
}

export default Movie;
