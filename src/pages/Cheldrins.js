import { useState } from "react";
import ProductsComponents from "../components/men/ProductsComponents";

const Cheldrins = () => {
  const [curentPage, setCurantPage] = useState(1991);
  return (
    <>
      <ProductsComponents categorys={curentPage} />
    </>
  );
};

export default Cheldrins;
