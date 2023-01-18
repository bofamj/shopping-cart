import "./carts.css";
import Cart from "./cart-comp/Cart";
import Amount from "./amounts/Amount";

import Lodding from "../lodding/Lodding";

const Carts = ({
  cart,
  totalPrice,
  increment,
  decrement,
  removeItem,
  lodding,
}) => {
  return (
    <>
      {lodding ? (
        <Lodding />
      ) : (
        <div className="carts-container">
          <div className="carts-section">
            <h1 className="cart-name">Your cart</h1>
            {cart.length === 0 ? (
              <h1 className="add-some-items">
                You Have No Products Let's Add Some
              </h1>
            ) : (
              cart.map((item) => (
                <Cart
                  key={item.id}
                  item={item}
                  increment={increment}
                  decrement={decrement}
                  removeItem={removeItem}
                />
              ))
            )}
          </div>
          <div className="amount-section">
            <Amount totalPrice={totalPrice} />
          </div>
        </div>
      )}
    </>
  );
};

export default Carts;
/*<div className="carts-container">
       
        
          <div className="carts-section">
            <h1 className="cart-name">Your cart</h1>
            {cart.length === 0 ? (
              <h1 className="add-some-items">
                You Have No Products Let's Add Some
              </h1>
            ) : (
              cart.map((item) => (
                <Cart
                  key={item.id}
                  item={item}
                  increment={increment}
                  decrement={decrement}
                  removeItem={removeItem}
                />
              ))
            )}
          </div>
          <div className="amount-section">
            <Amount totalPrice={totalPrice} />
          </div>
      
    </div> */
