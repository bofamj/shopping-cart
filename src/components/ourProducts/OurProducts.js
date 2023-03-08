import { Link } from "react-router-dom";
import "./ourProducts.css";
import women from "../../assets/woman-langery.jpg";
import childrin from "../../assets/children-clothes.jpg";
import man from "../../assets/man.jpg";

const OurProducts = () => {
  return (
    <section className="OurProducts">
      <h1 className="heading__title heading__title-margin-b">our products</h1>
      <div className="ourProducts__box">
        <div className="card__wraber">
          <div className="ourProducts__card ourProducts__card-front">
            <img src={childrin} alt="women" className="ourProducts__img" />
            <p className="ourProducts__name">Childrin clothes</p>
          </div>
          <div className="ourProducts__card ourProducts__card-back">
            <h3 className="heding-tertiars">
              we provide the latest model of children's clothes for all ages
            </h3>
            <Link to="/cheldrins" className="links ">
              <button className="hero-button">Shop Now</button>
            </Link>
          </div>
        </div>
        <div className="card__wraber">
          <div className="ourProducts__card ourProducts__card-front">
            <img src={women} alt="women" className="ourProducts__img" />
            <p className="ourProducts__name">women clothes</p>
          </div>
          <div className="ourProducts__card ourProducts__card-back">
            <h3 className="heding-tertiars">
              you can find all you need about woman clothes and lingerie
            </h3>
            <Link to="/woman" className="links drop-link">
              <button className="hero-button">Shop Now</button>
            </Link>
          </div>
        </div>
        <div className="card__wraber">
          <div className="ourProducts__card ourProducts__card-front">
            <img src={man} alt="women" className="ourProducts__img" />
            <p className="ourProducts__name">men clothes</p>
          </div>
          <div className="ourProducts__card ourProducts__card-back">
            <h3 className="heding-tertiars">
              you do not have to search in different places for your clothes we
              have all you ned
            </h3>
            <Link to="/men" className="links drop-link">
              <button className="hero-button">Shop Now</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
