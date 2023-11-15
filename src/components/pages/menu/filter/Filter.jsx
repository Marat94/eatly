import React, {useEffect, useState} from "react";
import _ from "lodash";
import {Link} from "react-router-dom";
import {category} from "./filterData";
import './filter.css';


const prices = [0, 25, 50, 100, 500, 1000]

const Filter = () => {

  const [item, setItems] = useState([]);

  useEffect(() => {
    setItems(category.map(value => {
      return {
        ...item,
        class: `food_${value.id}`
      }
    }))
  }, [category]);

  return (
    <>
      <section className="offer">
        <div className="offer-content">
          <div classsname="search-content">
            <div className="rectangle">
              <div className="rectangle-text">
                <h1 className="percent">50% OFF <br/>
                  <span className="weekend">WEEKENDS</span>
                </h1>
              </div>
              <div className="rectangle-img">
                <img src="/image/menu/foodImg.svg" alt="food"/>
              </div>
            </div>
            <div className="search">
              <form action="/search" method="get">
                <input type="text" id="search" name="q" placeholder="Search..." required/>
              </form>
            </div>
            <div className="choose-item">
              <button className="food-button">Food</button>
              <button className="res-button">Restaurant</button>
            </div>
          </div>

          <div className="filter">
            <h1>Category</h1>

            <div className="category">
              {category.map(v => {
                return (
                  <div
                    className={`food-category food_${v.id}`}
                    key={_.uniqueId('key_')}
                    style={{
                      background: v.backgroundColor,
                      color: v.color,
                    }}
                  >
                    <img src={v.image} alt="food image"/>
                    <p>{v.text}</p>
                  </div>
                )
              })}
            </div>
            <h1>Sort By</h1>
            <div className="sort-by">
              <div className="sort-by-pop">
                <p>Recommended</p>
                <p>Most Popular</p>
              </div>
              <p className="sort-by-del">Fast Delivery</p>
            </div>
            <h1>Price</h1>
            <div className="price-range">
              <div className="range">
                <div className="range-ellipse">
                  <div className="child-ellipse"></div>
                </div>
              </div>
              <div className="price-filter">
                {prices.map(price => {
                  return (
                    <div key={_.uniqueId('key_')}>
                      <p>${price}</p>
                    </div>

                  )
                })}
              </div>
            </div>
            <div className="filter-button">
              <Link to="/menu/order">
                <button className="apply-button">Apply</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Filter;