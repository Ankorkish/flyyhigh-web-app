import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./City.module.css";
import { useCities } from "../../../../Contexts/CitiesContext";
import { motion } from "framer-motion";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

City.propTypes = {
  city: PropTypes.object,
  index: PropTypes.number,
};

function City({ city, index }) {
  const { currentCity, deleteCity } = useCities();

  function handleDelete(e) {
    e.preventDefault();
    deleteCity(city.id);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 110,
        damping: 12,
        delay: index / 20,
      }}
    >
      <Link
        to={`/app/cities/${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}
        className={styles.city}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 110,
          delay: index / 20,
        }}
        viewport={{ once: true }}
      >
        <div className={styles.cityDate}>
          <div className={styles.cityName}>
            {city.cityName} {city.emoji}
          </div>
          <div className={styles.date}>{formatDate(city.date)}</div>
        </div>
        <div className={styles.delWrapper}>
          {currentCity.id === city.id && (
            <svg
              width="28"
              height="28"
              viewBox="0 0 34 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_85_22)">
                <path
                  d="M20.4002 8.50001L20.0602 6.80001C19.9327 6.14834 19.3518 5.66667 18.6718 5.66667H8.50016C7.721 5.66667 7.0835 6.30417 7.0835 7.08334V28.3333C7.0835 29.1125 7.721 29.75 8.50016 29.75C9.27933 29.75 9.91683 29.1125 9.91683 28.3333V19.8333H17.8502L18.1902 21.5333C18.3177 22.1992 18.8985 22.6667 19.5785 22.6667H26.9168C27.696 22.6667 28.3335 22.0292 28.3335 21.25V9.91667C28.3335 9.13751 27.696 8.50001 26.9168 8.50001H20.4002Z"
                  fill="#858585"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_85_22"
                  x="-4"
                  y="0"
                  width="42"
                  height="42"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_85_22"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_85_22"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          )}
          <button className={styles.delButton} onClick={handleDelete}>
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
    </motion.div>
  );
}

export default City;
