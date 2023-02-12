import { useContext } from "react";
import { useParams } from "react-router-dom";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import "./ditaile.css";
import DataContext from "../../../../../context/DataContext";

const Ditaile = () => {
  const { detaldProduct } = useContext(DataContext);
  let { id } = useParams();
  return (
    <div>
      {detaldProduct.map((product) =>
        product.goods_id === id ? (
          <div className="ditile-continer">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              {product.detail_image.map((image, index) => (
                <SwiperSlide>
                  <img src={image} name={index} alt="productimage" />
                </SwiperSlide>
              ))}
            </Swiper>

            <h1>{product.goods_name}</h1>
            <div className="ditile-dic-continer">
              <p>{product.goods_url_name}</p>
            </div>
            <div className="prics-and-riting">
              <h1>$ {product.salePrice.amount}</h1>
              <span>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </span>
            </div>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default Ditaile;
/*  */
