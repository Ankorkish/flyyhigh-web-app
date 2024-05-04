import styles from "./AppLayout.module.css";

import Sidebar from "../../Components/AppComponents/Sidebar/Sidebar";
import Map from "../../Components/AppComponents/Map/Map";

function AppLayout() {
  return (
    <div className={styles.appLayout}>
      <Sidebar />
      <Map></Map>
    </div>
  );
}

export default AppLayout;
