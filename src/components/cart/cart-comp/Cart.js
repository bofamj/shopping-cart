import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { faSquareMinus } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./cart.css";

const Cart = ({ item, increment, decrement }) => {
  /*  console.log(item); */
  return (
    <div className="cart-container ">
      <div className="img-continers">
        <img src={item.image} className="cart-img" alt="cart img" />
      </div>

      <div className="name">
        <h2>{item.name}</h2>
        <p>{item.price}$</p>
        <button className="remove-btn">Remove</button>
      </div>
      <div className="quantity-price-sec">
        <div className="quatity">
          <FontAwesomeIcon
            icon={faSquarePlus}
            className="quantity-btn"
            onClick={() => increment(item.id)}
          />
          <p value={item.qun}>{item.qun}</p>
          <FontAwesomeIcon
            icon={faSquareMinus}
            className="quantity-btn"
            onClick={() => decrement(item.id)}
          />
        </div>
      </div>
    </div>
  );
};
export default Cart;
