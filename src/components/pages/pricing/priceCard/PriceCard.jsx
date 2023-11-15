import React, {useEffect, useState} from "react";
import {featureList, pricingPlan} from "../pricingData";
import './priceCard.css'


const PriceCard = () => {

  const [pricePlan, setPricePlan] = useState([pricingPlan])

  useEffect(() => {
    setPricePlan(pricingPlan.map((v, id) => {
      return {
        ...v,
        class: `plan_${id}`
      }
    }))
  }, [pricingPlan]);

  return (
    <section className="price-card">
      <div className="our-pricing">
        <div className="our-pricing-info">
          <div className="our-pricing-rectangle">
            <div className="our-pricing-headline">
              <div><img src="/image/pricing/pricingArrow.svg" alt="arrow"/></div>
              <h1>Our Pricing</h1>
            </div>
          </div>
          <div className="our-pricing-dash">
            <img src="/image/pricing/ourPricingImg.svg" alt="pricing image"/>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-plans">
          {pricePlan.map((item, i) => {
            return (
              <div className={`card-pricing-plan ${item.class}`} key={i}>
                <h1>{item.title}</h1>
                <p>{item.text}</p>
              </div>
            )
          })}
        </div>
        <div className="card-prices">
          <div className="card-price">
            <div>
              <p className="card-price-currency">$</p>
              <div className="card-price-value">0<p>/month</p></div>
            </div>
            <div>
              <p className="card-price-currency">$</p>
              <div className="card-price-value">5<p>/month</p></div>
            </div>
          </div>

        </div>
        <div className="card-features">
          <h1 className="card-features-headline">Core features</h1>
          <div className="card-features-dash">
            {featureList.map((item, index) => {
              return (
                <div className="card-features-list" key={index}>
                  <div className="card-features-title">
                    <p>{item.title}</p>
                  </div>
                  <div className="card-features-icons">
                    <img src={item.cross || item.tick} alt="tick"/>
                    <img src={item.tick} alt=""/>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="card-buttons">
          <button className="start-here-button">Start Here</button>
          <button className="start-pro-button">Start Pro</button>
        </div>
      </div>
    </section>
  )
}

export default PriceCard;