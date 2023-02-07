import { useState } from "react";
import ProductsComponents from "../components/men/ProductsComponents";

const Women = () => {
  const [curentPage, setCurantPage] = useState(1727);
  return (
    <>
      <ProductsComponents categorys={curentPage} />
    </>
  );
};

export default Women;
