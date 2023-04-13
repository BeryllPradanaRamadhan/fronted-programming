import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import AddMoviesForm from "../components/AddMovieForm/AddMovieForm";
import Footer from "../components/Footer/Footer";
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
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
