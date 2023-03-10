import { useContext, useState } from "react";
import DataContext from "../../../context/DataContext";

import "./amount.css";

const Amount = () => {
  const [text, setText] = useState(1.72 / 100);
  const { totalPrice } = useContext(DataContext);
  return (
    <div className="div">
      <div className="amount-sec soubtotal">
        <h2>Subtotal</h2>
        <p>{totalPrice.toFixed(2)} $</p>
      </div>
      <div className="amount-sec tax">
        <h2>Tax</h2>
        <p>{(totalPrice * text).toFixed(2)} $</p>
      </div>
      <hr></hr>
      <div className="amount-sec total">
        <h2>Total</h2>
        <p>{(totalPrice - text).toFixed(2)} $</p>
      </div>
      <button className="checkout-btn">Checkoout</button>
    </div>
  );
};

export default Amount;
