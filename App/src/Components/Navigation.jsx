import { NavLink } from "react-router-dom";

import Logo from "./Common/Logo/Logo";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={styles.nav}>
      <Logo key="logo"></Logo>

      <div className={styles.mid}>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/pricing"> Pricing </NavLink>
        <NavLink to="/product"> Product </NavLink>
        <NavLink to="/app"> App </NavLink>
      </div>

      <NavLink to="/login" className={styles.login}>
        {" "}
        Login{" "}
      </NavLink>
    </nav>
  );
}

export default Navigation;
