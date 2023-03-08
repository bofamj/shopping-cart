import { Link } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/—Pngtree—shopping logo deisgn modern style_8549828.png";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="logo" className="footer__img" />
      <div className="footer--box">
        <div className="footer__nav">
          <ul className="footer__nav-items">
            <li className="footer__nav--tag">
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
            <li className="footer__nav--tag">
              <Link to="/favorites" className="links">
                <FontAwesomeIcon icon={faHeart} />
                Favorits
              </Link>
            </li>
            <li className="footer__nav--tag">
              <Link to="/cart" className="links">
                <div className="cart-icon-container">
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
        <div className="footer__copy-write">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
            aliquam est ex repudiandae quas consequuntur quod a obcaecati
            eveniet soluta!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
