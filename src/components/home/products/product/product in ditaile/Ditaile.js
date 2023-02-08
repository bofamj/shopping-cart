import { useParams } from "react-router-dom";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ditaile.css";
import { productsData } from "../../../../../dummy/data";
import DataContext from "../../../../../context/DataContext";
import { useContext } from "react";
const Ditaile = () => {
  const { detaldProduct } = useContext(DataContext);
  let { id } = useParams();

  return (
    <div>
      {detaldProduct.map((product) =>
        product.goods_id === id ? (
          <div className="ditile-continer">
            <div className="ditaile-img-continer">
              <img src={product.goods_img} alt="productimage" />
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
