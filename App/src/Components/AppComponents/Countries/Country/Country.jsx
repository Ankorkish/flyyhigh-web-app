import PropTypes from "prop-types";
import styles from "./Country.module.css";

Country.propTypes = {
  country: PropTypes.object,
};

function Country({ country }) {
  return (
    <div className={styles.country}>
      {country.country}
      <div className={styles.amount}>
        {country.amount}
        <div className={styles.message}>cities visited</div>
      </div>
      {country.emoji}
    </div>
  );
}

export default Country;
