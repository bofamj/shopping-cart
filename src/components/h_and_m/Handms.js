import { useContext } from "react";
import { motion } from "framer-motion";
import "./handM.css";
import Handm from "./h_and-m/Handm";
import useFetch from "../../useFetch";
import DataContext from "../../context/DataContext";
import Lodding from "../lodding/Lodding";

const Handms = () => {
  const { lodding } = useContext(DataContext);
  const url =
    "https://sephora.p.rapidapi.com/products/list?categoryId=cat150006&pageSize=60&currentPage=1";
  const RapidAPIHost = "sephora.p.rapidapi.com";
  const fetchProducts = useFetch(url, RapidAPIHost);
  if (lodding) {
    return <Lodding />;
  }
  let data = fetchProducts.products;
  console.log(fetchProducts.products);

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
          data.map((product) => <Handm product={product} />)
        )}
      </motion.section>
    </div>
  );
};

export default Handms;
/*  */
