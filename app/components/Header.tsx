import React from "react";
export default function Header() {
  return (
    <header id="home" className="header">
      <div className="header-wrapper">
        <div className="header-top theme-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="header-top-left text-center text-md-left">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="lni lni-phone"></i> +12345678
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni lni-envelope"></i>{" "}
                        OrtizNosiglia@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="header-top-right d-none d-md-block">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="lni lni-facebook-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni lni-twitter-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni lni-instagram-original"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* NAVBAR INICIO*/}
        <div className="navbar-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg">
                  <a className="navbar-brand" href="index.html">
                    <img src="assets/img/logo/logo.png" alt="Logo" />
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                  </button>

                  <div
                    className="collapse navbar-collapse sub-menu-bar"
                    id="navbarSupportedContent"
                  >
                    <ul id="nav" className="navbar-nav ml-auto">
                      <li className="nav-item active">
                        <a className="page-scroll active" href="#home">
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#about">
                          About
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#services">
                          Service
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#team">
                          Doctor
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#blog">
                          Blog
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#contact">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* NAVBAR FIN*/}
      </div>

      <div className="slider-wrapper">
        <section className="slider-section">
          <div className="slider-active slick-style">
            <div className="single-slider img-bg">
              <div className="container">
                <div className="row">
                  <div className="col-xl-7 col-lg-8 col-md-10">
                    <div className="slider-content">
                      <h1
                        data-animation="fadeInDown"
                        data-duration="1.5s"
                        data-delay=".5s"
                      >
                        Complete Healthcare Solution
                      </h1>
                      <p
                        data-animation="fadeInLeft"
                        data-duration="1.5s"
                        data-delay=".7s"
                      >
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed dinonumy eirmod tempor invidunt ut labore et dolore
                        magna aliquyam erat. Lorem ipsum dolor sit amet,
                        consetetur sadipscing elitr.
                      </p>
                      <a
                        href="#about"
                        className="btn theme-btn page-scroll"
                        data-animation="fadeInUp"
                        data-duration="1.5s"
                        data-delay=".9s"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-slider img-bg">
              <div className="container">
                <div className="row">
                  <div className="col-xl-7 col-lg-8 col-md-10">
                    <div className="slider-content">
                      <h1
                        data-animation="fadeInDown"
                        data-duration="1.5s"
                        data-delay=".5s"
                      >
                        Best Doctors and Equipments in Town
                      </h1>
                      <p
                        data-animation="fadeInLeft"
                        data-duration="1.5s"
                        data-delay=".7s"
                      >
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed dinonumy eirmod tempor invidunt ut labore et dolore
                        magna aliquyam erat. Lorem ipsum dolor sit amet,
                        consetetur sadipscing elitr.
                      </p>
                      <a
                        href="#contact"
                        className="btn theme-btn page-scroll"
                        data-animation="fadeInUp"
                        data-duration="1.5s"
                        data-delay=".9s"
                      >
                        Make Appoinment
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-slider img-bg">
              <div className="container">
                <div className="row">
                  <div className="col-xl-7 col-lg-8 col-md-10">
                    <div className="slider-content">
                      <h1
                        data-animation="fadeInDown"
                        data-duration="1.5s"
                        data-delay=".5s"
                      >
                        Your Health is Our Top Priority
                      </h1>
                      <p
                        data-animation="fadeInLeft"
                        data-duration="1.5s"
                        data-delay=".7s"
                      >
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed dinonumy eirmod tempor invidunt ut labore et dolore
                        magna aliquyam erat. Lorem ipsum dolor sit amet,
                        consetetur sadipscing elitr.
                      </p>
                      <a
                        href="#services"
                        className="btn theme-btn page-scroll"
                        data-animation="fadeInUp"
                        data-duration="1.5s"
                        data-delay=".9s"
                      >
                        Our Services
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
}
