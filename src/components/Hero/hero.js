import styles from "./hero.module.css";

function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>Covid ID</h2>
          <h3 className={styles.hero__genre}>
            SITUASI TERKINI PERKEMBANGAN CORONAVIRUS DISEASE (COVID-19)
          </h3>
          <p className={styles.hero__description}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas vero officiis odio saepe asperiores blanditiis doloribus deleniti, nam est ut cum voluptate quae exercitationem hic quidem aliquam reiciendis architecto iure a tenetur sint? Officiis odit soluta iusto, tempora ipsa quaerat excepturi laudantium neque molestias natus aliquid ut magni. Aperiam, dolorum.
          </p>
          <button className={styles.hero__button}>Vaccine</button>
        </div>
        <div className="hero__right">
          <img
            className={styles.hero__image}
            src="https://picsum.photos/200/300?random=2"
            alt="placeholder"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;