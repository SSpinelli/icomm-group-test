import React from "react";
import './style/banner.css'
import image1 from '../images/Group 13.png'
import image2 from '../images/Group 15.png'

const Banner = (_props) => {
  return (
    <section className="banner-container">
      <img src={image1} alt="" />
      <img src={image2} alt="" />
    </section>
  )
}

export default Banner;