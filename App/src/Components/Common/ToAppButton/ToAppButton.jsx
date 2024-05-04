import styles from "./ToAppButton.module.css";

function ToAppButton() {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button}>
        <div className={styles.text}>Use app now!</div>{" "}
        <div className={styles.bubble}>
          <svg
            width="33"
            height="33"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.9153 36.0772C14.1186 36.2804 14.3942 36.3946 14.6817 36.3946C14.9692 36.3946 15.2448 36.2804 15.4481 36.0772L33.5246 18.0007L33.523 27.6467C33.523 27.9345 33.6374 28.2105 33.8409 28.4141C34.0444 28.6176 34.3204 28.7319 34.6083 28.7319C34.8961 28.7319 35.1721 28.6176 35.3756 28.4141C35.5792 28.2105 35.6935 27.9345 35.6935 27.6467L35.6935 15.3842C35.6937 15.2416 35.6657 15.1004 35.6113 14.9687C35.5568 14.8369 35.4769 14.7172 35.376 14.6164C35.2752 14.5156 35.1555 14.4357 35.0238 14.3812C34.892 14.3267 34.7508 14.2988 34.6083 14.2989L22.3458 14.2989C22.2032 14.2989 22.0621 14.327 21.9305 14.3816C21.7988 14.4361 21.6792 14.516 21.5784 14.6168C21.3749 14.8203 21.2605 15.0964 21.2605 15.3842C21.2605 15.672 21.3749 15.948 21.5784 16.1516C21.7819 16.3551 22.0579 16.4694 22.3458 16.4694L31.9918 16.4679L13.9153 34.5443C13.712 34.7476 13.5978 35.0233 13.5978 35.3107C13.5978 35.5982 13.712 35.8739 13.9153 36.0772Z"
              fill="white"
            />
          </svg>
        </div>
      </button>
      <p className={styles.message}>
        Discover captivating cities and cultural wonders on a journey through
        the World, where stunning landscapes meet rich heritage.
      </p>
    </div>
  );
}

export default ToAppButton;
