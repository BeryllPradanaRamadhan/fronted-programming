import AddMoviesForm from "../../components/AddMovieForm/AddMovieForm";

function CreateMovie({ movies, setMovies }) {
  return (
    <>
      <AddMoviesForm movies={movies} setMovies={setMovies} />
    </>
  );
}

export default CreateMovie;
