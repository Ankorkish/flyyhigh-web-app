import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      © Copyright {new Date().getFullYear()} by FLYYHIGH Inc.
    </footer>
  );
}

export default Footer;
