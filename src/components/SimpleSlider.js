import React, { Component } from "react";
import Link from 'gatsby-link'
import Slider from "react-slick";
import logo1 from '../img/privilege-talk.jpg';
import logo2 from '../img/workshop.png';

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
      <div className="is-hidden-mobile">
        <Slider {...settings}>
          <div className="box">
            <article className="media">
              <div className="media-left is-hidden-tablet-only">
                <figure className="image is-128x128">
                  <img src={`${logo2}`} alt="Image"/>
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <h4>
                    <strong><Link to={'/events'}>Workshop at SOS Children's Village</Link></strong>
                  </h4>
                  <p>
                    Animal rights workshop for a group of 40 children.
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="box">
            <article className="media">
              <div className="media-left is-hidden-tablet-only">
                <figure className="image is-128x128">
                  <img src={`${logo1}`} alt="Image"/>
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <h4>
                    <strong><Link to={'/events'}>The Privilege Talk</Link></strong>
                  </h4>
                  <p>
                    A series of educational lectures and workshops
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="box">
            <article className="media">
              <div className="media-left is-hidden-tablet-only">
                <figure className="image is-128x128">
                  <img src={`${logo2}`} alt="Image"/>
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <h4>
                    <strong><Link to={'/events'}>Workshop at SOS Children's Village</Link></strong>
                  </h4>
                  <p>
                    Animal rights workshop for a group of 40 children.
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="box">
            <article className="media">
              <div className="media-left is-hidden-tablet-only">
                <figure className="image is-128x128">
                  <img src={`${logo1}`} alt="Image"/>
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <h4>
                    <strong><Link to={'/events'}>The Privilege Talk</Link></strong>
                  </h4>
                  <p>
                    A series of educational lectures and workshops
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