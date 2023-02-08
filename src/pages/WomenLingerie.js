import { useState } from "react";
import ProductsComponents from "../components/men/ProductsComponents";

const WomenLingerie = () => {
  const [curentPage, setCurantPage] = useState(2038);
  return (
    <>
      <ProductsComponents categorys={curentPage} />
    </>
  );
};

export default WomenLingerie;
