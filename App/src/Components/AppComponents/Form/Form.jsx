import BackButton from "../../Common/BackButton/BackButton";
import styles from "./Form.module.css";
import { useUrlPosition } from "../../../hooks/useUrlPosition";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useCities } from "../../../Contexts/CitiesContext";
import { useNavigate } from "react-router-dom";
export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}
function Form() {
  const { createCity } = useCities();

  const [lng, lat] = useUrlPosition();

  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [time, setTime] = useState("");
  const [note, setNote] = useState("");
  const [emoji, setEmoji] = useState("");

  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [geocodingError, setGeocodingError] = useState("");
  const navigate = useNavigate();

  useEffect(
    function () {
      async function fetchCityData() {
        if (!lat && !lng) return null;
        try {
          setGeocodingError("");
          setIsLoadingGeocoding(true);
          const res = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
          );
          const data = await res.json();

          if (!data.countryCode) {
            throw new Error(
              "That does not seem to be a country, Click somewhere else."
            );
          }
          setCityName(data.city || data.locality || "");
          setCountry(data.countryName);
          setEmoji(convertToEmoji(data.countryCode));
        } catch (e) {
          setGeocodingError(e.message);
        } finally {
          setIsLoadingGeocoding(false);
        }
      }
      fetchCityData();
    },
    [lat, lng]
  );

  if (geocodingError !== "") {
    return <div>{geocodingError}</div>;
  }
  if (isLoadingGeocoding) {
    return <div>Loading...</div>;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let city = {
      cityName: cityName,
      country: country,
      emoji: emoji,
      date: time,
      notes: note,
      position: { lat, lng },
    };
    await createCity(city);
    navigate("/app/cities");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className={styles.header}>Add visited city to the map</h2>
      <p className={styles.message}>
        here you can add waypoint to the map, after submitting the form the city
        will be added to the map
      </p>
      <div className={styles.inputGroup}>
        <label>City name</label>
        <input
          type="text"
          value={cityName}
          onChange={(e) => setCityName(e.value)}
        />
      </div>
      <div className={styles.inputGroup}>
        <label>When did you go to [city name]?</label>
        <DatePicker
          selected={time}
          onChange={(date) => setTime(date)}
          dateFormat={"dd.MM.YYYY"}
        />
      </div>
      <div className={styles.inputGroup}>
        <label>When did you go to [city name]?</label>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
        ></textarea>
      </div>
      <div className={styles.nav}>
        <BackButton></BackButton>
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
