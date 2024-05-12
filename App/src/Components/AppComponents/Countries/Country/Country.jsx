import PropTypes from "prop-types";
import styles from "./Country.module.css";
import { motion } from "framer-motion";
Country.propTypes = {
  country: PropTypes.object,
  index: PropTypes.number,
};

function Country({ country, index }) {
  return (
    <motion.div
      className={styles.country}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 110,
        delay: index / 10,
      }}
      viewport={{ once: true }}
    >
      {country.country}
      <div className={styles.amount}>
        {country.amount}
        <div className={styles.message}>cities visited</div>
      </div>
      {country.emoji}
    </motion.div>
  );
}

export default Country;
