import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Carts from "./components/cart/Carts";
import Nave from "./components/home/nave/Nave";

function App() {
  const [cart, setCart] = useState([]);

  let { totalPrice, totalQuantity } = cart.reduce(
    (acc, item) => {
      const { qun, price } = item;
      //total quantity
      acc.totalQuantity += qun;
      acc.totalPrice += qun * price;
      return acc;
    },
    {
      totalPrice: 0,
      totalQuantity: 0,
    }
  );

  return (
    <>
      <Nave totalQuantity={totalQuantity} />

      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route
          path="/cart"
          element={<Carts cart={cart} totalPrice={totalPrice} />}
        />
      </Routes>
    </>
  );
}

export default App;
