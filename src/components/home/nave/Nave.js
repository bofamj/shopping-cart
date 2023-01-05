import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./nave.css";
import logo from "../../.././assets/—Pngtree—shopping logo deisgn modern style_8549828.png";

const Nave = () => {
  return (
    <nav className="nav ">
      <div className="nav-wrapper">
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} className="nav-logo-img" />
          </Link>
        </div>
        <div className="nav-items">
          <ul className="nav nav-item">
            <li>
              <Link to="/" className="links">
                Home
              </Link>
            </li>
            <li>
              <Link to="/cart" className="links">
                <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
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
