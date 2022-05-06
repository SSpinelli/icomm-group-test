import React from "react";
import Slider from "react-slick";
import mock from '../mock'
import SliderCard from './SliderCard';
import leftArrow from '../images/Vector (6).svg'
import rightArrow from '../images/Vector (5).svg';
import './style/simpleSlider.css'
import './style/arrow.css'

export default class PreviousNextMethods extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.clickDot = this.clickDot.bind(this);
    this.state = {
      countSlider: 0,
    }
  }

  next() {
    const { countSlider } = this.state;
    this.setState({countSlider: countSlider + 1}, this.slider.slickNext())
  }
  previous() {
    const { countSlider } = this.state;
    this.setState({countSlider: countSlider - 1}, this.slider.slickPrev())
  }

  clickDot(event) {
    const allDots = document.querySelectorAll('.dots h1')
    allDots.forEach((dot, index) => {
      if (index === Number(event.target.id)) {
        dot.classList.add('ativo')
        dot.classList.remove('inativo')
      } else {
        dot.classList.remove('ativo')
        dot.classList.add('inativo')
      }
    })
  }

  render() {
    const {countSlider} = this.state;
    const settings = {
      className: "center",
      dots: false,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 4,
      swipeToSlide: true,
      afterChange: function(index) {
        return index + 1
      },
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 414,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1,
            infinite: false,
            dots: true,
            appendDots: dots => (
              <div
                style={{
                  backgroundColor: "#fff",
                  marginTop: "50px"
                }}
              >
                <ul style={{ margin: "-15px", display: 'flex', justifyContent: 'center', alignItems: 'center' }}> {dots} </ul>
              </div>
            ),
            customPaging: (i) => (
              <div className="dots">
                <h1 id={i} className={i === 0 ? 'ativo' : 'inativo'} onClick={this.clickDot}>•</h1>
              </div>
            ),
          }
        }
      ]
    };
    return (
      <div className='slider-container'>
        <Slider className="slider2" ref={c => (this.slider = c)} {...settings}>
          { mock.map((i, index) => (
            <SliderCard key={index} card={i} />
          )) }
        </Slider>
        <button disabled={countSlider === 0} className={`button ${countSlider === 0 ? 'last-slide-left' : 'arrow-left'}`}onClick={this.previous}>
          <img src={leftArrow} alt="botão de voltar" />
        </button>
        <button disabled={countSlider === mock.length - 4} className={`button ${countSlider === mock.length - 4 ? 'last-slide-right' : 'arrow-right'}`} onClick={this.next}>
          <img src={rightArrow} alt="botão de passar" />
        </button>
      </div>
    );
  }
}