//import Cart from "../../../cart/cart-comp/Cart";
import "./product.css";

const Product = ({ setCart, product, cart }) => {
  const { id, image, name, price, desc } = product;
  const addToCart = (id) => {
    setCart([...cart, { image, name, price, id, qun: 1 }]);
  };
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
