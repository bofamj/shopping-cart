import "./hero.css";

const Hero = () => {
  return (
    <section className="hero-continer">
      <div className="iner-container">
        <div className="text-container">
          <p>SHAYO FASHION PRESENTS</p>
          <h1>
            REDEFINING <span>PARTY</span> WEAR
          </h1>
          <p className="second-pargrafe">
            From the new trench to statement overshirts, it’s definitely time to
            embrace jacket season.
          </p>
          <button className="hero-button">SHOP NOW</button>
        </div>
      </div>
      <div className="img-container">
        {/* <img src={home} alt="hero" className="hero-img" /> */}
      </div>
    </section>
  );
};

export default Hero;
