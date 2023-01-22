import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Carts from "./components/cart/Carts";
import Nave from "./components/home/nave/Nave";
import Ditaile from "./components/home/products/product/product in ditaile/Ditaile";
import Error from "./components/error/Error";
import Favorites from "./components/favorites/Favorites";

function App() {
  const [cart, setCart] = useState([]);
  const [lodding, setLodding] = useState(false);

  //*add quntity to a item in the cart
  const increment = (id) => {
    const newItem = cart.map((item) => {
      if (item.id === id) {
        item.qun++;
      }
      return item;
    });
    setCart(newItem);
  };

  //*decrease quntity to a item in the cart
  const decrement = (id) => {
    const newItem = cart.map((item) => {
      if (item.id === id) {
        if (item.qun === 1) {
          item.qun = 1;
        } else {
          item.qun--;
        }
      }
      return item;
    });
    setCart(newItem);
  };

  //*remove item from cart

  const removeItem = (id) => {
    const newItem = cart.filter((item) => {
      if (item.id !== id) {
        return item;
      }
    });
    setCart(newItem);
  };

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
        <Route
          path="/"
          element={
            <Home cart={cart} setCart={setCart} setLodding={setLodding} />
          }
        />
        <Route
          path="/cart"
          element={
            <Carts
              cart={cart}
              totalPrice={totalPrice}
              increment={increment}
              decrement={decrement}
              removeItem={removeItem}
              lodding={lodding}
            />
          }
        />
        <Route path="/product/:id" element={<Ditaile />} />
        <Route path="/favorites" element={<Favorites cart={cart} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
