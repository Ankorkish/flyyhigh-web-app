import styles from "./Logo.module.css";
import { Link } from "react-router-dom";
import { useLogo } from "../../../Contexts/LogoContext";

function Logo() {
  const { isHovered, setIsHover } = useLogo();

  return (
    <h2
      className={styles.logo}
      onMouseEnter={() => setIsHover(() => true)}
      onMouseLeave={() => setIsHover(() => false)}
    >
      <Link style={{ textDecoration: "none" }} to="/">
        FLYYHIGH
      </Link>
      <div
        className={styles.line}
        style={{ width: `${isHovered ? 100 : 0}%` }}
      ></div>
    </h2>
  );
}

export default Logo;
