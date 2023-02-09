import { useParams } from "react-router-dom";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ditaile.css";
import { productsData } from "../../../../../dummy/data";
import DataContext from "../../../../../context/DataContext";
import { useContext, useState } from "react";
const Ditaile = () => {
  const { detaldProduct } = useContext(DataContext);
  const [corentImg, setcorentimg] = useState();
  let { id } = useParams();
  const handelIndex = (e) => {
    console.log("clicked", e.target.name);
  };
  return (
    <div>
      {detaldProduct.map((product) =>
        product.goods_id === id ? (
          <div className="ditile-continer">
            <div className="ditaile-img-continer">
              <img src={product.goods_img} alt="productimage" />
            </div>
            <div className="ditaile-img-wraper" onClick={(e) => handelIndex(e)}>
              {product.detail_image.map((image, index) => (
                <img
                  src={image}
                  name={index}
                  alt="productimage"
                  className="detaile__img"
                />
              ))}
            </div>
            <h1>{product.goods_name}</h1>
            <div className="ditile-dic-continer">
              <p>{product.goods_url_name}</p>
            </div>
            <div className="prics-and-riting">
              <h1>$ {product.salePrice.amount}</h1>
              <span>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </span>
            </div>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default Ditaile;
/*  */
