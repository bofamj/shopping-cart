import Hero from "./hero/Hero";
import Products from "./products/Products";

const Home = ({ cart, setCart }) => {
  return (
    <>
      <Hero />
      <Products setCart={setCart} />
    </>
  );
};

export default Home;
