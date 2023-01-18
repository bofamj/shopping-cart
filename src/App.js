import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Carts from "./components/cart/Carts";
import Nave from "./components/home/nave/Nave";
import { productsData } from "./dummy/data";

function App() {
  const [cart, setCart] = useState([]);

  /*  const addToCart = (id) => {
    if (cart.length === 0) {
      const items = productsData.find((item) => item.id === id);
      setCart([
        ...cart,
        {
          image: items.image,
          name: items.name,
          price: items.price,
          id: items.id,
          qun: 1,
          isAdded: items.isAdded,
        },
      ]);
    }
    if (cart.length > 0) {
      const isExsist = cart.find((item) => {
        if (item.id === id) {
          item.isAdded = true;
          console.log(item.id, item);
        } else {
          const items = productsData.find((item) => item.id === id);
          setCart([
            ...cart,
            {
              image: items.image,
              name: items.name,
              price: items.price,
              id: items.id,
              qun: 1,
              isAdded: items.isAdded,
            },
          ]);
        }
      });
    }
  };
 */
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
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route
          path="/cart"
          element={
            <Carts
              cart={cart}
              totalPrice={totalPrice}
              increment={increment}
              decrement={decrement}
              removeItem={removeItem}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
