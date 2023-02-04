import { useContext } from "react";
import { motion } from "framer-motion";
import "./men.css";
import BeautyProduct from "./man/Man";
import useFetch from "../../useFetch";
import DataContext from "../../context/DataContext";
import Lodding from "../lodding/Lodding";

const Men = () => {
  const { lodding } = useContext(DataContext);
  const url =
    "https://unofficial-shein.p.rapidapi.com/products/list?cat_id=1980&adp=10170797&language=en&country=US&currency=USD&sort=7&limit=20&page=1";
  const RapidAPIHost = "unofficial-shein.p.rapidapi.com";
  const params = "";
  const fetchProducts = useFetch(url, params, RapidAPIHost);
  const { fetchAllProducts } = fetchProducts;
  console.log(fetchAllProducts);

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
              <BeautyProduct product={product} />
            ))
          )}
        </motion.section>
      </div>
    );
  }
};

export default Men;
/*  */
