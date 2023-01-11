import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { faSquareMinus } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./cart.css";

const Cart = ({ item }) => {
  return (
    <div className="cart-container ">
      <div className="img-continers">
        <img src={item.image} className="cart-img" alt="cart img" />
      </div>

      <div className="name">
        <h3>{item.name}</h3>
      </div>
      <div className="quantity-price-sec">
        <div className="quatity">
          <FontAwesomeIcon
            icon={faSquarePlus}
            className="quantity-btn"
            onClick={(e) => console.log(e.target.value)}
          />
          <p value={item.qun}>{item.qun}</p>
          <FontAwesomeIcon icon={faSquareMinus} className="quantity-btn" />
        </div>
        <div className="price">
          <h4>{item.price}</h4>
        </div>
      </div>
    </div>
  );
};
export default Cart;
