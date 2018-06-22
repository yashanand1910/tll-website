import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      pauseOnHover: true
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-128x128">
                  <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image"/>
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <h4>
                    <strong>The Privilege Talk</strong>
                  </h4>
                  <p>
                    Theprivilegetalk is a series of educational lectures and workshops.
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-128x128">
                  <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image"/>
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <h4>
                    <strong>The Privilege Talk</strong>
                  </h4>
                  <p>
                    Theprivilegetalk is a series of educational lectures and workshops
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-128x128">
                  <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image"/>
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <h4>
                    <strong>The Privilege Talk</strong>
                  </h4>
                  <p>
                    Theprivilegetalk is a series of educational lectures and workshops
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-128x128">
                  <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image"/>
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <h4>
                    <strong>The Privilege Talk</strong>
                  </h4>
                  <p>
                    Theprivilegetalk is a series of educational lectures and workshops
                  </p>
                </div>
              </div>
            </article>
          </div>
        </Slider>
      </div>
    );
  }
}