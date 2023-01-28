import "./products.css";
import Product from "./product/Product";
import { productsData } from "../../../dummy/data";

const Products = () => {
  return (
    <section className="products-container">
      {productsData.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </section>
  );
};

export default Products;
