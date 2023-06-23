import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";

function Main() {
  return (
    <main>
      <Hero />
      <Movies title="Lastest Movies" />
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
