import "./carts.css";
import Cart from "./cart-comp/Cart";

const Carts = () => {
  return (
    <div className="carts-container">
      <h1 className="cart-name">Your cart</h1>
      <Cart />
      <Cart />
      <Cart />
    </div>
  );
};

export default Carts;
