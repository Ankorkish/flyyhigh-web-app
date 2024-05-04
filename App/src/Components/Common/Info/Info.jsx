import PropTypes from "prop-types";

import styles from "./Info.module.css";

Info.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
};

function Info({ header, text }) {
  return (
    <div className={styles.info}>
      <h1 className={styles.header}>{header}</h1>

      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
}

export default Info;
