import React, {useState} from "react";
import _ from "lodash";
import {dishData} from "../../../home/dishes/dishData";
import './chickenKingMenu.css'


let items = {
  name: "The Chicken King",
  time: "24min •",
  rating: 4.8,
  starIcon: "/image/starIcon.svg",
  bookmarkIcon: "/image/menu/bookmark_2.svg",
  popularImg: "/image/menu/fire.svg"
}

const ChickenKingMenu = () => {

  return (
    <>
      <section className="chicken-king">
        <div className="chicken-king-item">
          <div className="chicken-image">
            <img src="/image/menu/chickenKingImg.svg" alt="Chicken King"/>
          </div>
          <div className="chicken-king-info">
            <h1>{items.name}</h1>
            <div className="chicken-king-rating">
              <p>{items.time}</p>
              <img src={items.starIcon} alt="star"/>
              <p>{items.rating}</p>
            </div>
            <img src={items.bookmarkIcon} alt="bookmark" className="bookmark-icon"/>
          </div>
        </div>
      </section>
      <section className="chicken-king-menu">
        <div className="chicken-king-dish">
          <div className="popular-dish">
            <div>
              <img src={items.popularImg} alt="popular"/>
            </div>
            <Dish/>

          </div>
          <div className="chicken-veg">
            <h1>Chicken Vegetables</h1>
            <Dish/>
          </div>
        </div>
      </section>
    </>

  )
};


const Dish = () => {


  const [showCount, setShowCount] = useState(false)
  const [products, setProducts] = useState([...dishData])

  const onHandleDecrease = (id) => {
    setProducts(
      products.map(v => {
        if (v.count > 0) {
          return v.id === id ? {...v, count: v.count - 1, totalValue: v.totalValue - v.value} : {...v}
        } else {
          return {...v}
        }
      })
    )
  }

  const onHandleIncrease = (id) => {
    setProducts(
      products.map(v => {
        return v.id === id ? {...v, count: v.count + 1, totalValue: v.value + v.totalValue} : {...v}
      })
    )
  }

  return (

    <div className="dish-menu">
      {
        products.map((product) => {
          return (
            <div className={`dish ${product.class}`} key={_.uniqueId('key_')}>
              <div className="dish-img">
                <img src={product.image} alt=""/>
              </div>
              <div
                className="dish-type" style={{
                background: product.backgroundColor
              }}
              >
                <span style={{color: product.color}}>{product.category.title}</span>
              </div>
              <div>
                <h1 className="dish-name">{product.name}</h1>
                <div className="dish-info">
                  <span className="dish-time">{product.time}</span>
                  <img src="/image/starIcon.svg" className="star-icon" alt="Star Icon"/>
                  <span className="dish-rating">{product.rating}</span>
                </div>
                <div className="dish-price">$ {product.totalValue || product.value} </div>
                <div className="dish-select-count">
                  <button
                    className="count-decrement"
                    onClick={() => onHandleDecrease(product.id)}
                  >-
                  </button>
                  <span className="count">{product.count >= 1 ? product.count : showCount}</span>
                  <button
                    className="count-increment"
                    onClick={() => onHandleIncrease(product.id, product.count)}
                  >+
                  </button>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default ChickenKingMenu;