import laptop from "../../../.././assets/laptops.jpg";
import "./product.css";

const Product = () => {
  return (
    <div className="container">
      <div className="img-continer">
        <img src={laptop} alt="laptop" className="product-img" />
      </div>
      <div className="des-continer">
        <h1 className="title">product title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        </p>
        <div className="foter">
          <p>
            price <span>100$</span>
          </p>
          <button className="add-button">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
