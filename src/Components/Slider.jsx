import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "../Style/card.css"


export default function Carousel(props) {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const {productarr}=props
  console.log(productarr)
  return (
    <div
       className="sliderdiv"
      style={{ marginLeft: "80px", marginRight: "80px" ,width:"50%"}}
    >
      <Slider  {...settings} autoplay={true}>
       {productarr.map((el)=> <img  src={el.img} alt="" />)}
      
      </Slider>
    </div>
  );
}