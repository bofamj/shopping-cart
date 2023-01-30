import { createContext, useState } from "react";
import { productsData, allProductsData } from "../dummy/data";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState(productsData);
  const [allProducts, setAllProducts] = useState(allProductsData);
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  //const [isActive, setIsActive] = useState(false);
  const [lodding, setLodding] = useState(false);
  console.log(allProducts);
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
      const { qun, value } = item;
      console.log(value);
      //total quantity
      acc.totalQuantity += qun;
      acc.totalPrice += qun * value;
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
        lodding,
        setLodding,
        increment,
        decrement,
        removeItem,
        totalPrice,
        totalQuantity,
        products,
        setProducts,
        allProducts,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
