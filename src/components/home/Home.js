import Hero from "./hero/Hero";
import Products from "./products/Products";

const Home = ({ cart, setCart, setLodding, setFavorites, favorites }) => {
  return (
    <>
      <Hero />
      <Products
        setCart={setCart}
        cart={cart}
        setLodding={setLodding}
        setFavorites={setFavorites}
        favorites={favorites}
      />
    </>
  );
};

export default Home;
