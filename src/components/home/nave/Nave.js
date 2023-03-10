import { useContext } from "react";
import DataContext from "../../../context/DataContext";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./nave.css";
import logo from "../../.././assets/—Pngtree—shopping logo deisgn modern style_8549828.png";

const Nave = () => {
  const { totalQuantity } = useContext(DataContext);
  return (
    <nav className="nav ">
      <div className="nav-wrapper">
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="logo" className="nav-logo-img" />
          </Link>
        </div>
        <div className="nav-items">
          <ul className="nav nav-item">
            <li>
              <Link to="/" className="links">
                Home
              </Link>
            </li>
            <div className="dropdown">
              <button className="dropbtn">
                Products
                <FontAwesomeIcon icon={faCaretDown} />
              </button>
              <div className="dropdown-content">
                <Link to="/men" className="links drop-link">
                  Men
                </Link>
                <Link to="/woman" className="links drop-link">
                  Woman
                </Link>
                <Link to="/lingerie" className="links drop-link">
                  Woman-lingerie
                </Link>
                <Link to="/cheldrins" className="links drop-link">
                  Cheldrins
                </Link>
              </div>
            </div>
            <li>
              <Link to="/favorites" className="links">
                <FontAwesomeIcon icon={faHeart} />
                Favorits
              </Link>
            </li>
            <li>
              <Link to="/cart" className="links">
                <div className="cart-icon-container">
                  <p className="icon-nom">{totalQuantity}</p>
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    className="cart-icon"
                  />
                </div>
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nave;
