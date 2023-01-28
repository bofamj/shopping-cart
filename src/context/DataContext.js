import { createContext, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [lodding, setLodding] = useState(false);
  //!add quntity to a item in the cart
  const increment = (id) => {
    const newItem = cart.map((item) => {
      if (item.id === id) {
        item.qun++;
      }
      return item;
    });
    setCart(newItem);
  };

  //!decrease quntity to a item in the cart
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

  //!remove item from cart

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
    <DataContext.Provider
      value={{
        cart,
        setCart,
        favorites,
        setFavorites,
        isActive,
        setIsActive,
        lodding,
        setLodding,
        increment,
        decrement,
        removeItem,
        totalPrice,
        totalQuantity,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
