import Logo from "./../../Common/Logo/Logo";
import Footer from "../Footer/Footer";
import styles from "./Sidebar.module.css";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className={styles.main}>
      <Logo />
      <div className={styles.options}>
        <NavLink to="cities">Cities</NavLink>
        <NavLink to="countries">Countries</NavLink>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Sidebar;
