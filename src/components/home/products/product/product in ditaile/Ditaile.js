import { useParams } from "react-router-dom";
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
            <h1>$ {product.price}</h1>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default Ditaile;
