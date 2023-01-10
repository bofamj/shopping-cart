import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { faSquareMinus } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "../../../assets/laptops.jpg";
import "./cart.css";

const Cart = () => {
  return (
    <div className="cart-container ">
      <div className="img-continer">
        <img src={img} className="cart-img" alt="cart img" />
      </div>

      <div className="name">
        <h3>name</h3>
      </div>
      <div className="quantity-price-sec">
        <div className="quatity">
          <FontAwesomeIcon icon={faSquarePlus} className="quantity-btn" />
          <p>1</p>
          <FontAwesomeIcon icon={faSquareMinus} className="quantity-btn" />
        </div>
        <div className="price">
          <h4>100 $</h4>
        </div>
      </div>
    </div>
  );
};
export default Cart;
