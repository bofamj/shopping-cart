import "./carts.css";
import Cart from "./cart-comp/Cart";
import Amount from "./amounts/Amount";

const Carts = ({ cart, totalPrice }) => {
  return (
    <div className="carts-container">
      {/* <h1 className="cart-name">Your cart</h1> */}
      <div className="carts-section">
        {cart.map((item) => (
          <Cart key={item.id} item={item} />
        ))}
      </div>
      <div className="amount-section">
        <Amount totalPrice={totalPrice} />
      </div>
    </div>
  );
};

export default Carts;
