import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
import { nanoid } from "nanoid";

function Movies(props) {
  const { title, movies, setMovies } = props;

  function tambahFilm() {
    const movie = {
      id: nanoid(4),
      title: "Spiral Jigsaw",
      year: "2021",
      type: "Movie",
      poster: "https://picsum.photos/300/400",
    };

    setMovies([...movies, movie]);
  }
  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>{title}</h2>
        <div className={styles.movie__container}>
          {movies.map(function (movie) {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
        <button className={styles.movies__button} onClick={tambahFilm}>
          Tambah Film
        </button>
      </section>
    </div>
  );
}

export default Movies;
