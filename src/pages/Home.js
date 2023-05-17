import { useState } from "react";

import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import AddMoviesForm from "../components/AddMovieForm/AddMovieForm";

import data from "../components/utils/data";

function Main() {
  const [movies, setMovies] = useState(data);

  return (
    <main>
      <Hero />
      <Movies movies={movies} setMovies={setMovies} />
      <AddMoviesForm movies={movies} setMovies={setMovies} />
    </main>
  );
}

function Home() {
  return (
    <div>
      <Main />
    </div>
  );
}

export default Home;
