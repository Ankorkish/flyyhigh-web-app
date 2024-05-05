import PropTypes from "prop-types";
import { createContext, useContext } from "react";
import { useEffect, useState } from "react";
const BASE_URL = "http://localhost:8000/cities";

CitiesProvider.propTypes = {
  children: PropTypes.any,
};

const citiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [currentCity, setCurrentCity] = useState({});

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(() => true);
        let res = await fetch(BASE_URL);
        let data = await res.json();
        setCities(() => data);
      } catch (e) {
        alert(e.message);
      } finally {
        setIsLoading(() => false);
      }
    }
    fetchCities();
  }, []);

  function getCity(id) {
    async function fetchCities() {
      try {
        setIsLoading(() => true);
        let res = await fetch(`${BASE_URL}?id=${id}`);
        let data = await res.json();
        setCurrentCity(() => data[0]);
        setIsLoading(() => false);
      } catch (e) {
        console.error(e.message);
      } finally {
        setIsLoading(() => false);
      }
    }
    fetchCities();
  }

  return (
    <citiesContext.Provider value={{ cities, isLoading, currentCity, getCity }}>
      {children}
    </citiesContext.Provider>
  );
}
export function useCities() {
  let data = useContext(citiesContext);
  if (data == undefined) throw new Error("using city Context out of its range");
  return data;
}

export default CitiesProvider;
