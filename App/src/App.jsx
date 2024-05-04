import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import Login from "./pages/Login/Login";
import AppLayout from "./pages/AppLayout/AppLayout";
import CitiesList from "./Components/AppComponents/Cities/CitiesList/CityList";
import CountriesList from "./Components/AppComponents/Countries/CountriesList/CountriesList";

function App() {
  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="product" element={<Product />} />
      <Route path="App" element={<AppLayout />}>
        <Route path="cities" element={<CitiesList />} />
        <Route path="countries" element={<CountriesList />} />
      </Route>
      <Route path="login" element={<Login />} />
    </Routes>
  );
}

export default App;
