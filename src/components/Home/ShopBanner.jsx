import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

import Section from "../Section/Section";

import logo from "../../images/oxxxyshop.webp";
import bannerImg from "../../images/banner.webp";

const ShopBanner = () => (
  <Section className="shop-banner__section">
    <div className="container">
      <div className="shop-banner__wrapper">
        <Link to="/shop" className="shop-banner">
          <ScrollAnimation
            className="shop-banner__text"
            animateIn="fadeInLeft"
            animateOut="fadeOutLeft"
          >
            <p className="shop-banner__subtitle">UPDATED MERCH FROM OXXXYMIRON</p>
            <p className="shop-banner__title">OXXXYSHOP 2.0</p>
          </ScrollAnimation>
          <ScrollAnimation
            className="shop-banner__logo"
            animateIn="fadeInRight"
            animateOut="fadeOutRight"
          >
            <img src={logo} alt="oxxxyshop" className="shop-logo" />
          </ScrollAnimation>
          <ScrollAnimation
            className="shop-banner__image"
            animateIn="fadeInRight"
            animateOut="fadeOutRight"
          >
            <img src={bannerImg} alt="oxxxymiron" />
          </ScrollAnimation>
        </Link>
      </div>
    </div>
  </Section>
)

export default ShopBanner;


