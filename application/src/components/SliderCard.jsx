import React from "react";
import './style/sliderCard.css'
import heart from '../images/Vector (3).svg'

const SliderCard = (props) => {
  const tagToUse = (tag) => {
    if (tag === 'verão 2022') {
      return 'verao-2022'
    }
    if (tag === '20% Off') {
      return 'off-20'
    }
    if (tag === 'Lançamento') {
      return 'lancamento'
    }
    return 'no-class'
  }

  return (
    <div className="card-container">
      <span className={tagToUse(props.card.tag)}>{props.card.tag}</span>
      <img className="icon-heart" src={heart} alt="ícone de um coração preenchido"/>
      <img src={props.card.url} alt={props.card.title} />
      <div className="text-container">
        <h3 className="card-title">{props.card.title}</h3>
        <h2 className="card-price">{`R$${props.card.price},00`}</h2>
        <h3 className="card-price-12">{`12x R$${props.card.price / 12},00`}</h3>
      </div>
    </div>
  )
}

export default SliderCard;