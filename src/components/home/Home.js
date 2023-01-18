import Hero from "./hero/Hero";
import Products from "./products/Products";

const Home = ({ cart, setCart, setLodding }) => {
  return (
    <>
      <Hero />
      <Products setCart={setCart} cart={cart} setLodding={setLodding} />
    </>
  );
};

export default Home;
