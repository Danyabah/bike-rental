import React from "react";
import logo from "../img/logo.png";
import bgmain from "../img/bg_main.jpg";
import titlle01 from "../img/icons/title/01.png";
import logos01 from "../img/logos/01.png";
import brands01 from "../img/brands/01.jpg";
import titlle02 from "../img/icons/title/02.png";
import brands02 from "../img/brands/02.jpg";
import logos02 from "../img/logos/02.png";
import brands04 from "../img/brands/04.jpg";
import titlle03 from "../img/icons/title/03.png";
import brands03 from "../img/brands/03.jpg";
import logos03 from "../img/logos/03.png";
import brands05 from "../img/brands/05.jpg";
import titlle04 from "../img/icons/title/04.png";
import brands06 from "../img/brands/06.jpg";
import brands07 from "../img/brands/07.jpg";
import twitter from "../img/icons/twitter.png";
import bike from "../img/icons/bike.png";
import shop01 from "../img/shop/01.jpg";
import shop02 from "../img/shop/02.jpg";
import shop03 from "../img/shop/03.jpg";
import shop04 from "../img/shop/04.jpg";
import shop06 from "../img/shop/06.jpg";
import shop07 from "../img/shop/07.jpg";
import shop08 from "../img/shop/08.jpg";
import shop09 from "../img/shop/09.jpg";
import social01 from "../img/icons/social/01.png";
import social02 from "../img/icons/social/02.png";
import social03 from "../img/icons/social/03.png";

export default function Main() {
  return (
    <div className="wrapper">
      <main className="page">
        <header className="header">
          <div className="header__row">
            <nav className="header__menu menu">
              <div className="menu__icon icon-menu">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="menu__body">
                <ul className="menu__list">
                  <li>
                    <a href="" className="menu__link">
                      about us
                    </a>
                  </li>
                  <li>
                    <a href="" className="menu__link">
                      work
                    </a>
                  </li>
                  <li>
                    <a href="" className="menu__link">
                      shop
                    </a>
                  </li>
                  <li>
                    <a href="" className="menu__link">
                      contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="header__logo">
              <img src={logo} alt="" />
            </div>
          </div>
        </header>
        <div className="main-screen">
          <div
            className="main-screen__bg ibg"
            style={{ backgroundImage: `url(${bgmain})` }}
          >
            <img src={bgmain} alt="" />
          </div>
        </div>
        <div className="content">
          <section className="generation">
            <div className="container">
              <div className="generation__block block">
                <div className="block__icon">
                  <img src={titlle01} alt="" />
                </div>
                <h1 className="block__title">
                  A NEW GENERATION OF VINTAGE BIKE
                </h1>
                <div className="block__text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </div>
              </div>
            </div>
          </section>
          <section className="brands">
            <div className="brands__row">
              <div className="brands__column brands__column_b">
                <a href="" className="brands__item item">
                  <span className="item__logo">
                    <img src={logos01} alt="" />
                  </span>
                  <span
                    className="item__image ibg"
                    style={{ backgroundImage: `url(${brands01})` }}
                  >
                    <img src={brands01} alt="" />
                  </span>
                </a>
              </div>
              <div className="brands__column">
                <div className="brands__content block">
                  <div className="block__icon">
                    <img src={titlle02} alt="" />
                  </div>
                  <h2 className="block__title">vintage Oliva</h2>
                  <div className="block__text block__text_j">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived.
                  </div>
                </div>
                <div
                  className="brands__image ibg"
                  style={{ backgroundImage: `url(${brands02})` }}
                >
                  <img src={brands02} alt="" />
                </div>
              </div>
            </div>
          </section>
          <section className="brands brands_rev">
            <div className="brands__row">
              <div className="brands__column brands__column_b">
                <a href="" className="brands__item item">
                  <span className="item__logo">
                    <img src={logos02} alt="" />
                  </span>
                  <span
                    className="item__image ibg"
                    style={{ backgroundImage: `url(${brands04})` }}
                  >
                    <img src={brands04} alt="" />
                  </span>
                </a>
              </div>
              <div className="brands__column">
                <div className="brands__content block">
                  <div className="block__icon">
                    <img src={titlle03} alt="" />
                  </div>
                  <h2 className="block__title">La Boriosa</h2>
                  <div className="block__text block__text_j">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived.
                  </div>
                </div>
                <div
                  className="brands__image ibg"
                  style={{ backgroundImage: `url(${brands03})` }}
                >
                  <img src={brands03} alt="" />
                </div>
              </div>
            </div>
          </section>
          <section className="brands brands_last">
            <div className="brands__row">
              <div className="brands__column">
                <a href="" className="brands__item item">
                  <span className="item__logo">
                    <img src={logos03} alt="" />
                  </span>
                  <span
                    className="item__image ibg"
                    style={{ backgroundImage: `url(${brands05})` }}
                  >
                    <img src={brands05} alt="" />
                  </span>
                </a>
              </div>
              <div className="brands__column">
                <div className="brands__content block">
                  <div className="block__icon">
                    <img src={titlle04} alt="" />
                  </div>
                  <h2 className="block__title">retrГІ Bike - M. Hulot</h2>
                  <div className="block__text block__text_j">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived.
                  </div>
                </div>
                <div
                  className="brands__image ibg"
                  style={{ backgroundImage: `url(${brands06})` }}
                >
                  <img src={brands06} alt="" />
                </div>
              </div>
              <div className="brands__column">
                <a href="" className="brands__item item">
                  <span className="item__logo">
                    <img src={logos03} alt="" />
                  </span>
                  <span
                    className="item__image ibg"
                    style={{ backgroundImage: `url(${brands07})` }}
                  >
                    <img src={brands07} alt="" />
                  </span>
                </a>
              </div>
            </div>
          </section>
          <section className="slider">
            <div className="container">
              <div className="slider__body">
                <div className="slider__item">
                  <div className="slider__icon">
                    <img src={twitter} alt="" />
                  </div>
                  <h3 className="slider__title">
                    AOD New York @aod <span>/ 35 min</span>
                  </h3>
                  <div className="slider__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    ut tellus ac nulla semper rhoncus. Nullam a odio porttitor,
                    dictum turpis vitae, pretium ante amet.
                  </div>
                </div>
                <div className="slider__item">
                  <div className="slider__icon">
                    <img src={twitter} alt="" />
                  </div>
                  <h3 className="slider__title">
                    AOD New York @aod <span>/ 35 min</span>
                  </h3>
                  <div className="slider__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    ut tellus ac nulla semper rhoncus. Nullam a odio porttitor,
                    dictum turpis vitae, pretium ante amet. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Sed ut tellus ac
                    nulla semper rhoncus. Nullam a odio porttitor, dictum turpis
                    vitae, pretium ante amet.
                  </div>
                </div>
                <div className="slider__item">
                  <div className="slider__icon">
                    <img src={twitter} alt="" />
                  </div>
                  <h3 className="slider__title">
                    AOD New York @aod <span>/ 35 min</span>
                  </h3>
                  <div className="slider__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    ut tellus ac nulla semper rhoncus. Nullam a odio porttitor,
                    dictum turpis vitae, pretium ante amet.
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="shop">
            <div className="shop__body">
              <div className="shop__column shop__column_b">
                <div className="shop__block block-shop">
                  <div className="block-shop__row">
                    <div className="block-shop__column">
                      <a
                        href=""
                        className="block-shop__item block-shop__item_l item"
                      >
                        <span className="item__logo">
                          <img src={bike} alt="" />
                          <span>Shop now</span>
                        </span>
                        <span
                          className="item__image ibg"
                          style={{ backgroundImage: `url(${shop01})` }}
                        >
                          <img src={shop01} alt="" />
                        </span>
                      </a>
                    </div>
                    <div className="block-shop__column">
                      <a
                        href=""
                        className="block-shop__item block-shop__item_l item"
                      >
                        <span className="item__logo">
                          <img src={bike} alt="" />
                          <span>Shop now</span>
                        </span>
                        <span
                          className="item__image ibg"
                          style={{ backgroundImage: `url(${shop02})` }}
                        >
                          <img src={shop02} alt="" />
                        </span>
                      </a>
                    </div>
                  </div>
                  <a href="" className="block-shop__item item">
                    <span className="item__logo">
                      <img src={bike} alt="" />
                      <span>Shop now</span>
                    </span>
                    <span
                      className="item__image ibg"
                      style={{ backgroundImage: `url(${shop03})` }}
                    >
                      <img src={shop03} alt="" />
                    </span>
                  </a>
                </div>
              </div>
              <div className="shop__column">
                <a href="" className="block-shop__item block-shop__item_b item">
                  <span className="item__logo">
                    <img src={bike} alt="" />
                    <span>Shop now</span>
                  </span>
                  <span
                    className="item__image ibg"
                    style={{ backgroundImage: `url(${shop04})` }}
                  >
                    <img src={shop04} alt="" />
                  </span>
                </a>
              </div>
              <div className="shop__column">
                <a href="" className="block-shop__item block-shop__item_b item">
                  <span className="item__logo">
                    <img src={bike} alt="" />
                    <span>Shop now</span>
                  </span>
                  <span
                    className="item__image ibg"
                    style={{ backgroundImage: `url(${shop06})` }}
                  >
                    <img src={shop06} alt="" />
                  </span>
                </a>
              </div>
              <div className="shop__column shop__column_b">
                <div className="shop__block block-shop">
                  <a href="" className="block-shop__item item">
                    <span className="item__logo">
                      <img src={bike} alt="" />
                      <span>Shop now</span>
                    </span>
                    <span
                      className="item__image ibg"
                      style={{ backgroundImage: `url(${shop07})` }}
                    >
                      <img src={shop07} alt="" />
                    </span>
                  </a>
                  <div className="block-shop__row">
                    <div className="block-shop__column">
                      <a
                        href=""
                        className="block-shop__item block-shop__item_l item"
                      >
                        <span className="item__logo">
                          <img src={bike} alt="" />
                          <span>Shop now</span>
                        </span>
                        <span
                          className="item__image ibg"
                          style={{ backgroundImage: `url(${shop08})` }}
                        >
                          <img src={shop08} alt="" />
                        </span>
                      </a>
                    </div>
                    <div className="block-shop__column">
                      <a
                        href=""
                        className="block-shop__item block-shop__item_l item"
                      >
                        <span className="item__logo">
                          <img src={bike} alt="" />
                          <span>Shop now</span>
                        </span>
                        <span
                          className="item__image ibg"
                          style={{ backgroundImage: `url(${shop09})` }}
                        >
                          <img src={shop09} alt="" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="shop__footer">
              <div className="container">
                <a href="" className="shop__btn">
                  DISCOVER THE SHOP
                </a>
              </div>
            </div>
          </div>
          <div className="subscribe">
            <div className="container">
              <div className="subscribe__body">
                <div className="subscribe__logo">
                  <img src={logo} alt="" />
                </div>
                <div className="subscribe__label">Stay on the saddle!</div>
                <form action="#" className="subscribe__form">
                  <div className="subscribe__input">
                    <input
                      autoComplete="off"
                      type="text"
                      name="form[]"
                      data-value="enter your email..."
                      className="input req email"
                    />
                  </div>
                  <div className="subscribe__button">
                    <button type="submit" className="subscribe_btn">
                      GO
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <footer className="footer">
            <div className="container">
              <div className="footer__row">
                <div className="footer__column">
                  <div className="footer__address">
                    <p>AOD New York</p>
                    <p>2250 Lexington Avenue</p>
                    <p>New York, NY 10035 - info@domain.com</p>
                  </div>
                </div>
                <div className="footer__column">
                  <div className="footer__social social">
                    <a href="" className="social__link">
                      <img src={social01} alt="" />
                    </a>
                    <a href="" className="social__link">
                      <img src={social02} alt="" />
                    </a>
                    <a href="" className="social__link">
                      <img src={social03} alt="" />
                    </a>
                  </div>
                </div>
                <div className="footer__column">
                  <a href="" className="footer__dev dev">
                    <span className="dev__text">Handcrafted by</span>
                    <span className="dev__icon">
                      <img src="/img/icons/dev.png" alt="" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
