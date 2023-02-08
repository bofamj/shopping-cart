import { useState, useEffect, useContext } from "react";
import DataContext from "./context/DataContext";

const useFetch = (url, params, RapidAPIHost) => {
  const [fetchProducts, setFetchProducts] = useState([]);
  const [fetchAllProducts, setFetchAllProducts] = useState([]);
  const { setLodding } = useContext(DataContext);
  const getData = async () => {
    setLodding(true);
    const response = await fetch(url, {
      method: "GET",
      params: params,
      headers: {
        "X-RapidAPI-Key": "3cace6a128msh3b60c4110624461p16e8f0jsna4e59d6640d6",
        "X-RapidAPI-Host": RapidAPIHost,
      },
    });
    const data = await response.json();
    setFetchAllProducts(data.info.products);
    setFetchProducts(data.products);

    setLodding(false);
  };
  useEffect(() => {
    getData();
    // <-- pass controller
  }, [url, RapidAPIHost]);
  return { fetchProducts, fetchAllProducts };
};
export default useFetch;
