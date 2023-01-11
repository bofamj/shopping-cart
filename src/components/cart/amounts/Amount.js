import "./amount.css";

const Amount = ({ totalPrice }) => {
  return (
    <div className="div">
      <div className="amount-sec soubtotal">
        <h2>Subtotal</h2>
        <p>{totalPrice} $</p>
      </div>
      <div className="amount-sec tax">
        <h2>Tax</h2>
        <p>6.22 $</p>
      </div>
      <hr></hr>
      <div className="amount-sec total">
        <h2>Total</h2>
        <p>{totalPrice - 6.22} $</p>
      </div>
      <button className="checkout-btn">Checkoout</button>
    </div>
  );
};

export default Amount;
