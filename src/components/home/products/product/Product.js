import "./product.css";

const Product = ({ setCart, product }) => {
  const addToCart = (e) => {
    const item = e.target.value;

    console.log(item);
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
