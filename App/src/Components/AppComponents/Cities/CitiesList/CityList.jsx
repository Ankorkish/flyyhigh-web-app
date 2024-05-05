import PropTypes from "prop-types";
import City from "../City/City";

import styles from "./CityList.module.css";
import { useCities } from "../../../../Contexts/CitiesContext";

CitiesList.propTypes = {
  cities: PropTypes.array,
  isLoading: PropTypes.bool,
};

function CitiesList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <div>is loading</div>;
  return (
    <div className={styles.cityList}>
      {cities.map((city) => (
        <City city={city} key={city.id} />
      ))}
    </div>
  );
}

export default CitiesList;
