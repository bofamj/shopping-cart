import "./carts.css";
import Cart from "./cart-comp/Cart";
import Amount from "./amounts/Amount";

const Carts = () => {
  return (
    <div className="carts-container">
      {/* <h1 className="cart-name">Your cart</h1> */}
      <div className="carts-section">
        <Cart />
        <Cart />
        <Cart />
      </div>
      <div className="amount-section">
        <Amount />
      </div>
    </div>
  );
};

export default Carts;
