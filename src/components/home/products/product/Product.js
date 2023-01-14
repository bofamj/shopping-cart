//import Cart from "../../../cart/cart-comp/Cart";
import { useEffect } from "react";
import "./product.css";

const Product = ({ setCart, product, cart }) => {
  const { id, image, name, price, desc } = product;
  const addToCart = (id) => {
    const isEsest = cart.find((item) => item.id === id);
    if (isEsest) {
      isEsest.qun++;
      return setCart(cart, isEsest);
    } else {
      setCart([...cart, { image, name, price, id, qun: 1 }]);
    }
  };
  useEffect(() => {}, [cart]);

  return (
    <div className="container">
      <div className="img-continer">
        <img src={image} alt="laptop" className="product-img" />
      </div>
      <div className="des-continer">
        <h1 className="title">{name}</h1>
        <p>{desc}</p>
        <div className="foter">
          <p>
            price <span>{price}$</span>
          </p>
          <button
            className="add-button"
            value={product}
            onClick={() => addToCart(id)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
/* if (cart.length === 0) {
      setCart([...cart, { image, name, price, id, qun: 1 }]);
    }
    console.log(cart);
    if (cart.length > 0) {
      //console.log(cart);
      const nweItem = cart.find((item) => {
        if (item.id === id) {
          item.qun++;
          console.log(item);
        }
        return item;
      });
      setCart([...cart, nweItem]);
    } else {
      setCart([...cart, { image, name, price, id, qun: 1 }]);
      console.log(cart);
    } */
