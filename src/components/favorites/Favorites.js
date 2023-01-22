import Favorite from "./favorite/Favorite";
import "./favorites.css";

const Favorites = ({ favorites }) => {
  return (
    <div className="favorites-container">
      <div className="favorites-section">
        <h1 className="favorites-name">Your Favorites Items</h1>
      </div>
      <div className="favorites-section">
        {favorites.map((item) => (
          <Favorite key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
