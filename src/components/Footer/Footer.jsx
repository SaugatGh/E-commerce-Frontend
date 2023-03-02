import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Headphones</span>
          <span>Earbuds</span>
          <span>Earphones</span>
          <span>Accessories</span>
          <span>New Arrival</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Compare</span>
          <span>Cookie</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis harum quidem facere, ipsa ut eos doloribus numquam.
            Ducimus id ullam, a itaque maiores, possimus commodi perspiciatis ad
            rerum, dicta ratione.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            architecto obcaecati, labore libero ipsa numquam, hic similique
            reiciendis et illo provident corrupti omnis dolorem enim doloribus
            est, doloremque quos quo! Unde qui beatae, nam illum recusandae,
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Skullcandy</span>
          <span className="copyright">@Copyright 2023. ALl right reserved</span>
        </div>
        <div className="right">
          <img
            src="https://www.seekpng.com/png/detail/272-2720577_visa-mastercard-american-express-logo-png-awesome-graphic.png"
            alt="cards"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
