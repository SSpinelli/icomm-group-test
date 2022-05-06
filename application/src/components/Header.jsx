import React, {useContext} from "react";
import './style/header.css';
import magentoLogo from '../images/Group 9.png';
import cart from '../images/Group 11.svg'
import myContext from '../context'

const Header = (_props) => {
  const value = useContext(myContext)
  return (
    <header>
      <nav>
        <div className="logo-container">
          <img src={magentoLogo} alt="sss" />
        </div>
        <div className="container-cart">
          <img src={cart} alt="icone de carrinho de compras" />
          <div className="quantity-cart">
            <span>{value.cartItens.length}</span>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;