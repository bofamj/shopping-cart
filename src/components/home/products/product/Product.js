//import Cart from "../../../cart/cart-comp/Cart";
import "./product.css";

const Product = ({ setCart, product, cart }) => {
  const addToCart = (e) => {
    // const item = e.target.value;
    setCart([...cart, product]);
  };
  return (
    <div className="container">
      <div className="img-continer">
        <img src={product.image} alt="laptop" className="product-img" />
      </div>
      <div className="des-continer">
        <h1 className="title">{product.name}</h1>
        <p>{product.desc}</p>
        <div className="foter">
          <p>
            price <span>{product.price}$</span>
          </p>
          <button className="add-button" value={product} onClick={addToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
