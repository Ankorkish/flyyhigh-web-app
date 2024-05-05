import { useParams } from "react-router-dom";
import styles from "./CityInfo.module.css";
import BackButton from "../../../Common/BackButton/BackButton";
import { useCities } from "../../../../Contexts/CitiesContext";
import { useEffect } from "react";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function CityInfo() {
  const cityId = useParams().id;

  const { currentCity, getCity, isLoading } = useCities();
  useEffect(() => getCity(cityId), [cityId]);

  if (isLoading) return <div>is Loading</div>;
  return (
    <>
      <h1 className={styles.header}>Learn about visited city </h1>
      <p className={styles.message}>
        here you can see previously added notes about city
      </p>
      <div className={styles.data}>
        <div className={styles.dataGroup}>
          <div className={styles.label}>City name</div>
          <div className={styles.value}>{currentCity.cityName}</div>
        </div>
        <div className={styles.dataGroup}>
          <div className={styles.label}>
            You went to {currentCity.cityName} on
          </div>
          <div className={styles.value}>
            {currentCity.date ? formatDate(currentCity.date) : "Loading"}
          </div>
        </div>
        <div className={styles.dataGroup}>
          <div className={styles.label}>Your notes</div>
          <div className={styles.value}>
            {currentCity.notes == "" ? "No notes" : currentCity.notes}
          </div>
        </div>
        <div className={styles.dataGroup}>
          <div className={styles.label}>Learn more</div>
          <a
            className={styles.value}
            href={`https://en.wikipedia.org/wiki/${currentCity.cityName}`}
          >
            Learn more about {currentCity.cityName} on Wiki!
          </a>
        </div>
      </div>

      <BackButton />
    </>
  );
}

export default CityInfo;
