import "./product.css";

const Product = ({ setCart, product, cart, setLodding }) => {
  const { id, image, name, price, desc, isAdded } = product;

  //* add the product to the cart
  const addToCart = (product) => {
    setLodding(true);
    //* aerch if the product has already been added
    const isExsist = cart.find((item) => item.id === product.id);

    //* if the product has already been added then add for quantity
    if (isExsist) {
      console.log(isExsist);
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                id: item.id,
                image: item.image,
                name: item.name,
                price: item.price,
                qun: item.qun + 1,
              }
            : {
                id: item.id,
                image: item.image,
                name: item.name,
                price: item.price,
                qun: item.qun,
              }
        )
      );
    } else {
      setCart([...cart, { id, image, name, price, desc, qun: 1 }]);
    }
    setLodding(false);
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
          {!isAdded ? (
            <button
              className="add-button "
              value={product}
              onClick={() => addToCart(product)}
            >
              Add to cart
            </button>
          ) : (
            <button
              className="add-button desply"
              value={product}
              onClick={() => addToCart(id)}
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;

/*const addToCart = (product) => {
    if (cart.length === 0) {
      setCart([
        ...cart,
        {
          image,
          name,
          price,
          id,
          qun: 1,
          isAdded: true,
        },
      ]);
    }
    if (cart.length > 0) {
      const isEsest = cart.map((item) => {
        const { image, name, price, id } = item;
        if (item.id === id) {
          console.log(item);
        } else {
          setCart([
            ...cart,
            { image, name, price, id, qun: 1, isAdded: false },
          ]);
        }
        return item;
      });
      setCart(isEsest);
    }
  };*/
