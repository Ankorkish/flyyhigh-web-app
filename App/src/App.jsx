import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import Login from "./pages/Login/Login";
import AppLayout from "./pages/AppLayout/AppLayout";
import CitiesList from "./Components/AppComponents/Cities/CitiesList/CityList";
import CountriesList from "./Components/AppComponents/Countries/CountriesList/CountriesList";
import LogoProvider from "./Contexts/LogoContext";

import CityInfo from "./Components/AppComponents/Cities/CityInfo/CityInfo";
import Form from "./Components/AppComponents/Form/Form";
import CitiesProvider from "./Contexts/CitiesContext";

function App() {
  return (
    <LogoProvider>
      <CitiesProvider>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="product" element={<Product />} />
          <Route path="App" element={<AppLayout />}>
            <Route index element={<Navigate to="cities" replace />}></Route>
            <Route path="cities" element={<CitiesList />} />
            <Route path="cities/:id" element={<CityInfo />} />
            <Route path="countries" element={<CountriesList />} />
            <Route path="form" element={<Form />} />
          </Route>

          <Route path="login" element={<Login />} />
        </Routes>
      </CitiesProvider>
    </LogoProvider>
  );
}

export default App;
