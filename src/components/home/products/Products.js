import "./products.css";
import Product from "./product/Product";
import { productsData } from "../../../dummy/data";

const Products = ({ setCart }) => {
  return (
    <section className="products-container">
      {productsData.map((product) => (
        <Product key={product.id} setCart={setCart} product={product} />
      ))}
    </section>
  );
};

export default Products;
