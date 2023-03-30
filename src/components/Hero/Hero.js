import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>Spiderman</h2>
          <h3 className={styles.hero__genre}>Genre: Action, Drama, Fantasy</h3>
          <p className={styles.hero__description}>
         The film was
            directed by Jon Watts, written by Chris McKenna and Erik Sommers,
            and stars Tom Holland as Peter Parker / Spider-Man, alongside Samuel
            L.
          </p>
          <button className={styles.hero__button}>Watch</button>
        </div>
        
        <div className={styles.hero__right}>
          <img
            className={styles.hero__image}
            src="http://picsum.photos/600/400"
            alt="placeholder"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
