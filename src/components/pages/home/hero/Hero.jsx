import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchHero} from "../../../store/actions/hero";

import "./Hero.css";

const Hero = (props) => {

  const {data, fetchHero} = props

  useEffect(() => {
    fetchHero()
  }, []);

  console.log(data)

  return (
    <section className="about-eatly">
      <div className="eatly-info">
        <div className="content">
          <p className="content-title">Over 1000 Users</p>
          <h1 className="content-headline">
            Enjoy Foods All Over The <span>World</span>
          </h1>
          <p className="content-par">
            EatLy helps you set saving goals, earn cash back offers, Go <br/> to
            disclaimer for more details and get paychecks up to two <br/> days
            early. Get a <span> $20 bonus.</span>
          </p>

          <div className="content-buttons">
            <button className="get-started">Get Started</button>
            <button className="gopro">Go Pro</button>
          </div>

          <div className="content-reviews">
            <img src="/image/trustpilot.svg" alt="trustpilot" className="trustpilot"/>
            <img src="/image/reviewStar.svg" alt="review star" className="review-star"/>
            <span className="review-num">4900+</span>
          </div>
        </div>

        <div className="ellipse"></div>

      </div>
    </section>
  );
};


const getHeroState = (state) => {
  return {
    data: {...state.hero}
  }
}

const heroAction = {
  fetchHero
}

const HeroContainer = connect(
  getHeroState,
  heroAction
)(Hero)

export default HeroContainer;
