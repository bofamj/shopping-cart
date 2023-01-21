import { useParams } from "react-router-dom";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ditaile.css";
import { productsData } from "../../../../../dummy/data";

const Ditaile = () => {
  let { id } = useParams();
  let productId = Number(id);
  console.log(useParams());
  console.log(productId);

  return (
    <div>
      {productsData.map((product) =>
        product.id === productId ? (
          <div className="ditile-continer">
            <div className="ditaile-img-continer">
              <img src={product.image} alt="productimage" />
            </div>
            <h1>{product.name}</h1>
            <div className="ditile-dic-continer">
              <p>{product.desc}</p>
            </div>
            <div className="prics-and-riting">
              <h1>$ {product.price}</h1>
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
