import { useParams } from "react-router-dom";
import styles from "./CityInfo.module.css";

function CityInfo() {
  const cityId = useParams().id;

  return <div>{cityId}</div>;
}

export default CityInfo;
