import home from "../../.././assets/pngegg.png";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero-continer">
      <div className="text-container">
        <h1>HYPE-WORTHY BEAUTY DELIVERED MONTHLY</h1>
        <button className="hero-button">Clik Her</button>
      </div>
      <div className="img-container">
        <img src={home} alt="hero" className="hero-img" />
      </div>
    </section>
  );
};

export default Hero;
