import { useContext } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import "./men.css";
import ProductsComponent from "./man/ProductsComponent";
import useFetch from "../../useFetch";
import DataContext from "../../context/DataContext";
import Lodding from "../lodding/Lodding";

const ProductsComponents = ({ categorys }) => {
  const { lodding, setDetaldProduct } = useContext(DataContext);

  const url = `https://unofficial-shein.p.rapidapi.com/products/list?cat_id=${categorys}&adp=10170797&language=en&country=US&currency=USD&sort=7&limit=60&page=1`;
  const RapidAPIHost = "unofficial-shein.p.rapidapi.com";
  const params = "";
  const fetchProducts = useFetch(url, params, RapidAPIHost);
  const { fetchAllProducts } = fetchProducts;
  setDetaldProduct(fetchAllProducts);
  if (lodding) {
    return <Lodding />;
  } else {
    return (
      <div className="products-wraper">
        {/* <Filter /> */}
        <motion.section
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 1 }}
          layout
          className="products-container"
        >
          {lodding ? (
            <Lodding />
          ) : (
            fetchAllProducts.map((product) => (
              <ProductsComponent product={product} />
            ))
          )}
        </motion.section>
      </div>
    );
  }
};

export default ProductsComponents;
/*  */
