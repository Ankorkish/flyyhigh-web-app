import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./City.module.css";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));
City.propTypes = {
  city: PropTypes.object,
};

function City({ city }) {
  return (
    <Link
      to={`/app/cities/${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}
      className={styles.city}
    >
      <div className={styles.cityDate}>
        <div className={styles.cityName}>
          {city.cityName} {city.emoji}
        </div>
        <div className={styles.date}>{formatDate(city.date)}</div>
      </div>
      <div className={styles.delWrapper}>
        <button className={styles.delButton}>
          <svg
            width="11"
            height="12"
            viewBox="0 0 11 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.88541 2.33573L5.64255 5.09287L8.38541 2.35001C8.446 2.28552 8.51898 2.23394 8.59999 2.19834C8.681 2.16275 8.76836 2.14388 8.85684 2.14287C9.04628 2.14287 9.22796 2.21812 9.36192 2.35208C9.49587 2.48603 9.57113 2.66771 9.57113 2.85715C9.57279 2.94473 9.55654 3.03172 9.52338 3.11278C9.49022 3.19385 9.44084 3.26729 9.37827 3.32858L6.5997 6.07144L9.37827 8.85001C9.49599 8.96518 9.56503 9.12114 9.57113 9.28572C9.57113 9.47516 9.49587 9.65685 9.36192 9.7908C9.22796 9.92476 9.04628 10 8.85684 10C8.76581 10.0038 8.67499 9.98859 8.59014 9.95539C8.50529 9.92219 8.42828 9.87171 8.36398 9.80715L5.64255 7.05001L2.89255 9.80001C2.8322 9.86235 2.7601 9.91212 2.68041 9.94644C2.60073 9.98077 2.51503 9.99898 2.42827 10C2.23883 10 2.05715 9.92476 1.92319 9.7908C1.78924 9.65685 1.71398 9.47516 1.71398 9.28572C1.71232 9.19815 1.72857 9.11116 1.76173 9.0301C1.79489 8.94903 1.84427 8.87559 1.90684 8.8143L4.68541 6.07144L1.90684 3.29287C1.78912 3.1777 1.72008 3.02173 1.71398 2.85715C1.71398 2.66771 1.78924 2.48603 1.92319 2.35208C2.05715 2.21812 2.23883 2.14287 2.42827 2.14287C2.5997 2.14501 2.76398 2.2143 2.88541 2.33573Z"
              fill="#858585"
            />
          </svg>
        </button>
      </div>
    </Link>
  );
}

export default City;
