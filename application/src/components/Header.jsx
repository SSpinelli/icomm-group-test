import React from "react";
import './style/header.css';
import magentoLogo from '../images/Magento.svg';
import cart from '../images/Group 11.svg'

const Header = (_props) => {
  return (
    <header>
      <nav>
        <div className="logo-container">
          <img src={magentoLogo} alt="sss" />
          <h2>MCX</h2>
        </div>
        <div><img src={cart} alt="ss" /></div>
      </nav>
    </header>
  )
}

export default Header;