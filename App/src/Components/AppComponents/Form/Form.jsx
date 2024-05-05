import { useNavigate } from "react-router-dom";
import styles from "./Form.module.css";

function Form() {
  const navigate = useNavigate();

  function handleBack(e) {
    e.preventDefault();
    navigate(-1);
  }

  return (
    <form>
      <h2 className={styles.header}>Add visited city to the map</h2>
      <p className={styles.message}>
        here you can add waypoint to the map, after submitting the form the city
        will be added to the map
      </p>
      <div className={styles.inputGroup}>
        <label>City name</label>
        <input type="text" />
      </div>
      <div className={styles.inputGroup}>
        <label>When did you go to [city name]?</label>
        <input type="text" />
      </div>
      <div className={styles.inputGroup}>
        <label>When did you go to [city name]?</label>
        <textarea></textarea>
      </div>
      <div className={styles.nav}>
        <button className={styles.btn} onClick={handleBack}>
          <svg
            width="15"
            height="15"
            viewBox="0 0 23 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.5666 10.8256C21.5666 10.5361 21.4516 10.2585 21.2469 10.0537C21.0422 9.84903 20.7646 9.73402 20.4751 9.73402L4.72866 9.73402L11.5992 2.8657C11.8041 2.66072 11.9193 2.38272 11.9193 2.09285C11.9193 1.80297 11.8041 1.52497 11.5992 1.32C11.3942 1.11502 11.1162 0.999872 10.8263 0.999872C10.5364 0.999872 10.2584 1.11502 10.0535 1.32L1.3207 10.0528C1.21904 10.1542 1.13839 10.2746 1.08336 10.4072C1.02833 10.5399 1 10.682 1 10.8256C1 10.9692 1.02833 11.1114 1.08336 11.244C1.13839 11.3766 1.21904 11.4971 1.3207 11.5985L10.0535 20.3312C10.155 20.4327 10.2755 20.5132 10.4081 20.5682C10.5407 20.6231 10.6828 20.6514 10.8263 20.6514C11.1162 20.6514 11.3942 20.5362 11.5992 20.3312C11.8041 20.1263 11.9193 19.8483 11.9193 19.5584C11.9193 19.2685 11.8041 18.9905 11.5992 18.7855L4.72866 11.9172L20.4751 11.9172C20.7646 11.9172 21.0422 11.8022 21.2469 11.5975C21.4516 11.3928 21.5666 11.1151 21.5666 10.8256Z"
              fill="white"
            />
          </svg>
          Go back
        </button>
        <button type="submit" className={styles.btn}>
          Send
          <svg
            width="15"
            height="15"
            viewBox="0 0 23 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.43335 11.1741C1.43335 11.4636 1.54836 11.7413 1.75307 11.946C1.95778 12.1507 2.23544 12.2657 2.52495 12.2657L18.2713 12.2657L11.4008 19.1341C11.1959 19.339 11.0807 19.617 11.0807 19.9069C11.0807 20.1968 11.1959 20.4748 11.4008 20.6798C11.6058 20.8847 11.8838 20.9999 12.1737 20.9999C12.4636 20.9999 12.7416 20.8847 12.9465 20.6798L21.6793 11.947C21.781 11.8456 21.8616 11.7251 21.9166 11.5925C21.9717 11.4599 22 11.3177 22 11.1741C22 11.0306 21.9717 10.8884 21.9166 10.7558C21.8616 10.6231 21.781 10.5027 21.6793 10.4013L12.9465 1.66851C12.845 1.56702 12.7245 1.48651 12.5919 1.43159C12.4593 1.37666 12.3172 1.34839 12.1737 1.34839C11.8838 1.34839 11.6058 1.46354 11.4008 1.66851C11.1959 1.87349 11.0807 2.15149 11.0807 2.44136C11.0807 2.73124 11.1959 3.00924 11.4008 3.21421L18.2713 10.0825L2.52495 10.0825C2.23544 10.0825 1.95778 10.1975 1.75307 10.4023C1.54836 10.607 1.43335 10.8846 1.43335 11.1741Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}

export default Form;
