import "./products.css";
import Product from "./product/Product";
import { productsData } from "../../../dummy/data";

const Products = ({ setCart, cart, setLodding, setFavorites, favorites }) => {
  return (
    <section className="products-container">
      {productsData.map((product) => (
        <Product
          key={product.id}
          setCart={setCart}
          product={product}
          cart={cart}
          setLodding={setLodding}
          setFavorites={setFavorites}
          favorites={favorites}
        />
      ))}
    </section>
  );
};

export default Products;
