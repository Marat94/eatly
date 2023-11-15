import React, {useEffect, useState} from "react";
import _ from 'lodash';
import {getDataType} from "../../../store/actions/dish";
import {dishData} from "./dishData";
import "./dishes.css";
import {connect} from "react-redux";


// const randomColor = [
//   {
//     backgroundColor: '#F7EDD0',
//     color: '#DAA31A'
//   },
//   {
//     backgroundColor: '#F7C5BA',
//     color: '#FB471D'
//   },
//   {
//     backgroundColor: '#d6eee0',
//     color: '#309D5B'
//   }
// ]


const Dishes = (props) => {

  const {dataList, getDataType} = props

  // const [rows, setRows] = useState([]);
  const [showCount, setShowCount] = useState(false)
  const [products, setProducts] = useState([...dishData])
  const [moreDishes, setMoreDishes] = useState([...dishData])

  useEffect(() => {
    getDataType()
  }, []);

  console.log(dataList)

  useEffect(() => {
    setProducts(dishData.map(item => {
      return {
        ...item,
        class: `type_${item.category.id}`
      }

    }))
  }, [dishData])

  const onHandleViewAll = () => {
    setProducts([
      ...products,
      ...moreDishes
    ])
    setMoreDishes([])
  }

  const onHandleDecrement = (id) => {
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

  const onHandleIncrement = (id, count) => {
    setProducts(() => {
      return products.map(v => {
        return v.id === id ? {...v, count: v.count + 1, totalValue: v.value + v.totalValue} : {...v}
      })
    })
  }


  return (
    <section className="dishes">

      <h1 className="dish-title">Our Top <span>Dishes</span></h1>
      <div className="top-dishes">
        {products.map((product) => {
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
                    onClick={() => onHandleDecrement(product.id)}
                  >-
                  </button>
                  <span className="count">{product.count >= 1 ? product.count : showCount}</span>
                  <button
                    className="count-increment"
                    onClick={() => onHandleIncrement(product.id, product.count)}
                  >+
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      {!_.isEmpty(moreDishes) &&
        <div className="view-all-dishes" onClick={onHandleViewAll}>View All
          <span className="view-dish-arrow">
           <img src="/image/viewAllArrow.svg" alt="View all arrow"/>
          </span>
        </div>
      }
      <hr/>
    </section>
  )
};

const getDishState = (state) => {
  return {
    dataList: state.dish.dish
  }
}

const dishAction = {
  getDataType
}

const DishContainer = connect(
  getDishState,
  dishAction
)(Dishes)

export default DishContainer;