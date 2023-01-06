import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "../Style/card.css"


export default function HomePageCarousel(props) {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
       className="sliderdiv"
      style={{ marginLeft: "80px", marginRight: "80px" ,width:"50%"}}
    >
      <Slider  {...settings} autoplay={true}>
       <div>1</div>
       <div>2</div>
       <div>3</div>
       <div>4</div>
       <div>5</div>
      </Slider>
    </div>
  );
}