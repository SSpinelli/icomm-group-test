import React, { useContext, useEffect, useState } from "react";
import myContext from '../context'
import './style/sliderCard.css'
import fullHeart from '../images/Vector (3).svg';
import emptyHeart from '../images/Vector (4).svg';

const SliderCard = (props) => {
  const value = useContext(myContext)
  const [fav, setFav] = useState(false);
  const [showBtn, setShowBtn] = useState(false)
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

  useEffect(() => {
    setFav(value.favsItens.some((i) => i.title === props.card.title))
  })

  const heart = () => {
    return fav ? fullHeart : emptyHeart
  }

  const handleHeartClick = () => {
    const globalFav = value.favsItens.some((i) => i.title === props.card.title)
    setFav(!fav)
    if(globalFav) {
      value.setFavsItens(value.favsItens.filter((i) => i.title !== props.card.title))
    } else {
      value.setFavsItens([...value.favsItens, props.card])
    }
  }

  const hoverIn = () => {
    setShowBtn(true)
  }

  const hoverOf = () => {
    setShowBtn(false);
  }

  const handleBtn = () => {
    value.setCartItens([...value.cartItens, props.card])
  }

  return (
    <div className="card-container" onMouseEnter={hoverIn} onMouseLeave={hoverOf}>
      <span className={tagToUse(props.card.tag)}>{props.card.tag}</span>
      <img onClick={ handleHeartClick } className="icon-heart" src={heart()} alt="ícone de um coração preenchido"/>
      <img src={props.card.url} alt={props.card.title} />
      <div className="text-container">
        <h3 className="card-title">{props.card.title}</h3>
        <div className="price-container">
          <h2>{`R$${props.card.price},00`}</h2>
          <h3>{`12x R$${props.card.price / 12},00`}</h3>
        </div>
      </div>
      {showBtn && <button onClick={handleBtn} className="purchase-btn">Comprar</button>}
    </div>
  )
}

export default SliderCard;