import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Carts from "./components/cart/Carts";
import Nave from "./components/home/nave/Nave";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <Nave />

      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Carts cart={cart} />} />
      </Routes>
    </>
  );
}

export default App;
