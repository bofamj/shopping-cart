import { useContext } from "react";
import DataContext from "../../.././context/DataContext";
import "./favorite.css";

const Favorite = ({ item }) => {
  const { favorites, setFavorites } = useContext(DataContext);
  //*remove item from favorites list
  const removeItemFomFavorite = () => {
    setFavorites(favorites.filter((fav) => item.id !== fav.id));
  };
  /*  console.log(item); */
  return (
    <div className="favorite-container ">
      <div className="favorite-img-continers">
        <img src={item.image} className="favorite-img" alt="cart img" />
      </div>

      <div className="favorite-name">
        <h2>{item.name}</h2>
        <p>{item.price}$</p>
      </div>
      <div className="favorite-quantity-price-sec">
        <button
          className="favorite-remove-btn"
          onClick={() => removeItemFomFavorite(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
export default Favorite;
