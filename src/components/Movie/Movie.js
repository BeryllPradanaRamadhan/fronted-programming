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
      <h3>{movie.title}</h3>
    <p>{movie.year}</p>
    </div>
    </StyledMovie>
  );
}

export default Movie;
