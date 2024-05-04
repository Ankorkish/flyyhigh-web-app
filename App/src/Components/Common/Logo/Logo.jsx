import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <h2 className={styles.logo}>
      <Link style={{ textDecoration: "none" }} to="/">
        FLYYHIGH
      </Link>
    </h2>
  );
}

export default Logo;
