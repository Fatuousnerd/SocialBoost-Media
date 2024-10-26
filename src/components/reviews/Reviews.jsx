import "./reviews.scss";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { content } from "./Data.jsx";

const Single = ({ item }) => {
  const ref = useRef()

  return (
    <div className="content">
      <h1>{item.description}</h1>
      {/* <img src={item.profile} alt="" /> */}
      <h2>{item.name}</h2>
      <h3>{item.info}</h3>
    </div>
  )
};

const Reviews = () => {

  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 700,
    fade: true,
  }

  return (
    <div className="reviews" id="reviews">
      <div className="logo">
        <img src="./favicon.jpg" alt="" />
        <h1>SocialBoost Media</h1>
      </div>

      <div className="contentHolder">
        <Slider {...settings}>
          {content.map(item => (
            <Single item={item} key={item.id} />
          ))}
        </Slider>
      </div>

    </div>
  )
}

export default Reviews