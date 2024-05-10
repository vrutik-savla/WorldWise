import styles from "./Footer.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        Built by Vrutik Savla for learning React from Udemy.
        <br />
        Copyright &copy; by Jonas Schmedtmann.
      </p>
    </footer>
  );
}

export default Footer;
