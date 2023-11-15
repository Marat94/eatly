import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {fetchCategory} from "../../../store/actions/category";
import {connect} from "react-redux";
import {restaurantsList} from "./restaurantsList";
import "./restaurants.css"


const Restaurants = (props) => {
  const {fullData, fetchCategory} = props

  useEffect(() => {
    fetchCategory()
  }, [])

  console.log('fullData', fullData)

  const [shawViewAll, setShawViewAll] = useState(true)
  const [restaurants, setRestaurants] = useState([...restaurantsList])
  const [allRestaurants, setAllRestaurants] = useState([...restaurantsList])

  const onHandleView = () => {
    setRestaurants([
      ...restaurants,
      ...allRestaurants,
    ])
    setAllRestaurants([])
    setShawViewAll(false)
  }

  return (

    <section className="restaurants">

      <h1 className="res-title">Our Top <span>Restaurants</span></h1>

      <div className="top-restaurants">
        {restaurants.map((v, index) => {
          return (

            <div className={`restaurant ${v.class}`} key={index}>
              <div>
                <Link to={v.url}>
                  <img src={v.image} alt="chicken king image" className="res-img"/>
                </Link>

              </div>
              <div
                className="res-type"
                style={{background: v.backgroundColor}}
              >
                <span style={{color: v.color}}>{v.category.title}</span>
              </div>
              <Link to={v.url} className="chicken-king-link">
                <h1 className="res-name">{v.name}</h1>
              </Link>
              <div className="res-info">
                <span className="res-time">{v.time}</span>
                <img src="/image/starIcon.svg" alt="star icon" className="star-icon"/>
                <span className="res-rating">{v.rating}</span>
                <img src={v.icon} alt="bookmark" className="bookmark"/>
              </div>
            </div>

          )
        })}
      </div>
      {shawViewAll &&
        <div
          className="view-all-res"
          onClick={onHandleView}
        >
          View All
          <span className="view-res-arrow">
            <img src="/image/viewAllArrow.svg" alt="View All Arrow"/>
          </span>
        </div>
      }


      <hr/>
    </section>
  )
}


// const mapStateToProps = (state) => ({
//   categoryState: state.category.categoryData
// });
//
// const mapDispatchToProps = {
//   getCategoryAction
// };
//
//
// const RestaurantsContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(Restaurants);


const reducerState = (state) => {
  return {
    fullData: {...state.category}
    // categoryList: state.category.categoryData,
    // loading: state.category.loading,
    // error: state.category.error
  }
}


const actionFunction = {
  fetchCategory
}

const RestaurantsContainer = connect(
  reducerState,
  actionFunction
)(Restaurants)

export default RestaurantsContainer;





