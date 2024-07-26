import "./reviews.scss";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const content = [
  {
    id:1,
    description:"Working with SocialBoost Media has been a game-changer for our company. Their strategic approach to Google and Meta ads has significantly boosted our online presence and driven impressive ROI. Highly recommend!",
    profile:"./pexels-shvetsa-3727513.jpg",
    name:"Emily Johnson",
    info:"Marketing Director at TechGrowth Inc.",
  },
  {
    id:2,
    description:"SocialBoost Media transformed our digital strategy with their expert web development services. They delivered a sleek and functional website that has greatly enhanced user experience and engagement.",
    profile:"./pexels-teddyjmodel-2955375.jpg",
    name:"Micheal Carter",
    info:"CEO of InnovateTech Solutions",
  },
  {
    id:3,
    description:"Thanks to SocialBoost Media's e-mail marketing expertise, our sales have soared. Their tailored campaigns and insightful analytics have truly optimized our customer outreach.",
    profile:"./pexels-olly-774909.jpg",
    name:"Sarah Davis",
    info:"E-Commerce Manager at FashionTrends Co.",
  },
  {
    id:4,
    description:"SocialBoost Media stands out for their innovative approach to digital marketing. Their team goes above and beyond to understand our goals and deliver exceptional results. Highly recommended partner!",
    profile:"./pexels-linkedin-2182970.jpg",
    name:"David Roberts",
    info:"Founder of TechStart Ventures",
  },
  {
    id:5,
    description:"SocialBoost Media not only executed flawless ad campaigns but also provided valuable insights that aligned perfectly with our brand vision. They are a trusted partner for achieving marketing goals.",
    profile:"./pexels-edmond-dantes-4347368.jpg",
    name:"Jessica Lee",
    info:"Creative Director at DesignStudio XYZ",
  },
];

const Single = ({item}) => {
  const ref = useRef()

  return(
    <div className="content">
      <h1>{item.description}</h1>
      <img src={item.profile} alt="" />
      <h2>{item.name}</h2>
      <h3>{item.info}</h3>
    </div>
  )
}

const Reviews = () => {

  const settings = {
    dots:true,
    infinite:true,
    speed:500,
    slidesToShow:1,
    slidesToScroll:1,
  }

  return (
    <div className="reviews" id="reviews">
      <div className="logo">
        <img src="./favicon.jpg" alt="" />
        <h1>SocialBoost Media</h1>
      </div>

      <div className="contentHolder">
        <Slider {...settings}>
        {content.map(item=>(
          <Single item={item} key={item.id} />
        ))}
        </Slider>
      </div>

    </div>
  )
}

export default Reviews