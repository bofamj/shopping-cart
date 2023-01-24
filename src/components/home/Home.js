import Hero from "./hero/Hero";
import Products from "./products/Products";

const Home = ({
  cart,
  setCart,
  setLodding,
  setFavorites,
  favorites,
  isActive,
  setIsActive,
}) => {
  return (
    <>
      <Hero />
      <Products
        setCart={setCart}
        cart={cart}
        setLodding={setLodding}
        setFavorites={setFavorites}
        favorites={favorites}
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </>
  );
};

export default Home;
