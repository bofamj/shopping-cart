import { useContext } from "react";
import "./products.css";
import Product from "./product/Product";
import Filter from "../../filter/Filter";
import DataContext from "../../../context/DataContext";

const Products = () => {
  const { products, allProducts } = useContext(DataContext);
  return (
    <div className="products-wraper">
      <Filter />
      <section className="products-container">
        {allProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
};

export default Products;
