import "./products.css";
import Product from "./product/Product";
import { productsData } from "../../../dummy/data";
import Filter from "../../filter/Filter";

const Products = () => {
  return (
    <div className="products-wraper">
      <Filter />
      <section className="products-container">
        {productsData.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
};

export default Products;
