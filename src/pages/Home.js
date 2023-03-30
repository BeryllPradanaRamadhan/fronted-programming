import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import AddMoviesForm from "../components/AddMovieForm/AddMovieForm";
import Footer from "../components/Footer/Footer";

function Main() {
  return (
    <main>
      <Hero />
      <Movies />
      <AddMoviesForm />
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
