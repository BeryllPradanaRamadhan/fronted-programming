import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
import { nanoid } from "nanoid";

function Movies(props) {
// Destructing props
  const { movies, setMovies} = props;

//   membuat fungsi tambah film
// di jalankan ketika tombol di clik
function tambahFilm() {
    const movie  = {
    id: nanoid(4),
    title: "Spiral Jigsaw",
    year: "2021",
    type: "Movie",
    poster: "https://picsum.photos/300/400",
};
    // Menambahkan movie ke state movies
    // spread operator: copy and merge array
    setMovies([...movies, movie])
}
  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movie__container}>
          {/* 
          * Lopping data movies: map.
          * Render Component Movie
          * Kirim props movie
          */}
          {movies.map(function (movie) {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
        
        {/* Menambahkan event on Click */}
       
        <button className={styles.movies__button} onClick={tambahFilm}>Tambah Film</button>
        
      </section>
    </div>
  );
}

export default Movies;