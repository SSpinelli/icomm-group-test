import mock from '../mock'
import React, { Component } from "react";
import Slider from "react-slick";
import SliderCard from './SliderCard';

export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",
      dots: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 4,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };
    return (
      <div>
        <Slider {...settings}>
        { mock.map((i, index) => (
          <SliderCard key={index} card={i} />
        )) }
      </Slider>
      </div>
    );
  }
}