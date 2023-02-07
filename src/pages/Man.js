import { useState } from "react";
import ProductsComponents from "../components/men/ProductsComponents";

const Man = () => {
  const [curentPage, setCurantPage] = useState(1980);
  return (
    <>
      <ProductsComponents categorys={curentPage} />
    </>
  );
};

export default Man;
