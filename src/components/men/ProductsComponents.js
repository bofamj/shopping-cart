import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import "./men.css";
import ProductsComponent from "./man/ProductsComponent";
import useFetch from "../../useFetch";
import DataContext from "../../context/DataContext";
import Lodding from "../lodding/Lodding";

const ProductsComponents = ({ categorys }) => {
  const { lodding } = useContext(DataContext);

  const [searchParams, setSearchParams] = useSearchParams();
  searchParams.get("__firebase_request_key");
  /* const pageName = window.location.href;
  if (pageName === "http://localhost:3000/men") {
    setCurantPage(2015);
  } else {
    setCurantPage(1764);
  } */
  //wome = 1727 , bers = 1764 women2=1780 women2=1738 womenShose=1748 womenShose2=1749 exsasoriz = 1765 exsasoriz2 = 1758
  // men=1980 menAnderware = 1985 menJakets = 1987 menPans=1989 menSherts=1990
  //keds = 1991 kedsJakets = 1992 kedsSweters = 1993 kedsPejamas=1994+1995+1996+1997+1998+1999
  //cuortins=2018
  const url = `https://unofficial-shein.p.rapidapi.com/products/list?cat_id=${categorys}&adp=10170797&language=en&country=US&currency=USD&sort=7&limit=60&page=1`;
  //const url =
  // "https://unofficial-shein.p.rapidapi.com/products/search?keywords=Computer%20Bags%20For%20Women&language=en&country=US&currency=USD&sort=7&limit=20&page=1";
  const RapidAPIHost = "unofficial-shein.p.rapidapi.com";
  const params = "";
  const fetchProducts = useFetch(url, params, RapidAPIHost);
  const { fetchAllProducts } = fetchProducts;

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
