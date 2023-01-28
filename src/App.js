import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Carts from "./components/cart/Carts";
import Nave from "./components/home/nave/Nave";
import Ditaile from "./components/home/products/product/product in ditaile/Ditaile";
import Error from "./components/error/Error";
import Favorites from "./components/favorites/Favorites";
import { DataProvider } from "./context/DataContext";
function App() {
  return (
    <DataProvider>
      <Nave />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Carts />} />
        <Route path="/product/:id" element={<Ditaile />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </DataProvider>
  );
}

export default App;
