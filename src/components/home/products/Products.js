import { useContext } from "react";
import { motion } from "framer-motion";
import "./products.css";
import Product from "./product/Product";
import Filter from "../../filter/Filter";
import DataContext from "../../../context/DataContext";

const Products = () => {
  const { products, allProducts } = useContext(DataContext);

  return (
    <div className="products-wraper">
      <Filter />
      <motion.section
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        layout
        className="products-container"
      >
        {allProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </motion.section>
    </div>
  );
};

export default Products;
