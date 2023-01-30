import { useContext } from "react";
import DataContext from "../../../context/DataContext";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { faSquareMinus } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./cart.css";

const Cart = ({ item }) => {
  const { increment, decrement, removeItem } = useContext(DataContext);
  return (
    <div className="cart-container ">
      <div className="img-continers">
        <img
          src={`https://${item.imageUrl}`}
          className="cart-img"
          alt="cart img"
        />
      </div>

      <div className="name">
        <h2>{item.brandName}</h2>
        <p>{item.price}$</p>
        <button className="remove-btn" onClick={() => removeItem(item.id)}>
          Remove
        </button>
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
