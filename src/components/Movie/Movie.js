import StyledMovie from "./Movie.styled";

// tangkap props
function Movie(props) {
//   Destructing object props
const { movie } = props;

    return (
      <StyledMovie>
    <div>
      <img
        src={movie.poster}
        alt=""
      />
      <h3>{movie.title}</h3>
    <p>{movie.year}</p>
    </div>
    </StyledMovie>
  );
}

export default Movie;
