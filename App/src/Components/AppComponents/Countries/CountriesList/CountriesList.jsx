import PropTypes from "prop-types";
import Country from "../Country/Country";

import styles from "./CountriesList.module.css";
import { useCities } from "../../../../Contexts/CitiesContext";

CountriesList.propTypes = {
  cities: PropTypes.array,
  isLoading: PropTypes.bool,
};

function CountriesList() {
  const { cities, isLoading } = useCities();

  const countries = cities
    .reduce((acc, cur) => {
      if (!acc.map((el) => el.country).includes(cur.country)) {
        return [...acc, { country: cur.country, amount: 1, emoji: cur.emoji }];
      }
      acc.find((el) => el.country === cur.country).amount += 1;
      return acc;
    }, [])
    .sort((a, b) => b.amount - a.amount);

  if (isLoading) return <div>Loading</div>;

  return (
    <div className={styles.countriesList}>
      {countries.map((el, index) => (
        <Country country={el} key={el.country} index={index} />
      ))}
    </div>
  );
}

export default CountriesList;
