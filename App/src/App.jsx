import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import Login from "./pages/Login/Login";
import AppLayout from "./pages/AppLayout/AppLayout";
import CitiesList from "./Components/AppComponents/Cities/CitiesList/CityList";
import CountriesList from "./Components/AppComponents/Countries/CountriesList/CountriesList";
import LogoProvider from "./Contexts/LogoContext";
import { useEffect, useState } from "react";
import CityInfo from "./Components/AppComponents/Cities/CityInfo/CityInfo";
import Form from "./Components/AppComponents/Form/Form";

const BASE_URL = "http://localhost:8000/cities";

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <LogoProvider>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="product" element={<Product />} />
        <Route path="App" element={<AppLayout />}>
          <Route index element={<Navigate to="cities" replace />}></Route>
          <Route
            path="cities"
            element={<CitiesList cities={cities} isLoading={isLoading} />}
          />
          <Route path="cities/:id" element={<CityInfo />} />
          <Route
            path="countries"
            element={<CountriesList cities={cities} isLoading={isLoading} />}
          />
          <Route path="form" element={<Form />} />
        </Route>

        <Route path="login" element={<Login />} />
      </Routes>
    </LogoProvider>
  );
}

export default App;
