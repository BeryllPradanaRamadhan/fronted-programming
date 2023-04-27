import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <div>
          <h2 className={styles.footer__brand}>Covid ID</h2>
          <p className={styles.footer__author}>Created by Beryll Pradana Ramadhan</p>
        </div>
        <div>
          <ul className={styles.footer__list}>
            <li className={styles.footer__item}>Global</li>
            <li className={styles.footer__item}>Indonesia </li>
            <li className={styles.footer__item}>Provinsi</li>
            <li className={styles.footer__item}>About</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;