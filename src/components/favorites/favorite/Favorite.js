import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { faSquareMinus } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./favorite.css";

const Favorite = ({ item /* increment, decrement, removeItem */ }) => {
  /*  console.log(item); */
  return (
    <div className="favorite-container ">
      <div className="favorite-img-continers">
        <img src={item.image} className="favorite-img" alt="cart img" />
      </div>

      <div className="name">
        <h2>{item.name}</h2>
        <p>{item.price}$</p>
        <button
          className="remove-btn" /* onClick={() => removeItem(item.id)} */
        >
          Remove
        </button>
      </div>
      <div className="quantity-price-sec">
        <div className="quatity">
          <FontAwesomeIcon
            icon={faSquarePlus}
            className="quantity-btn"
            /* onClick={() => increment(item.id)} */
          />
          <p value={item.qun}>{item.qun}</p>
          <FontAwesomeIcon
            icon={faSquareMinus}
            className="quantity-btn"
            /* onClick={() => decrement(item.id)} */
          />
        </div>
      </div>
    </div>
  );
};
export default Favorite;
