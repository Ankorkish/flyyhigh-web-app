import Contact from "../Components/Common/Conatct/Contact";
import Info from "../Components/Common/Info/Info";
import ToAppButton from "../Components/Common/ToAppButton/ToAppButton";
import Navigation from "../Components/Navigation";

import styles from "./main.module.css";

function Homepage() {
  return (
    <section style={{ zIndex: "-12" }}>
      <div className={styles.bg}>
        <Navigation />
        <Contact />
        <Info header={"Weaving Your Dreams into Unforgettable Adventures"} />
        <ToAppButton />
      </div>
    </section>
  );
}

export default Homepage;
