import React, {useEffect, useState} from "react";
import './paymentReview.css'

const paymentData = [
  {
    id: 1,
    img: '/image/order/chickenImg_1.svg',
    name: 'Chicken Hell',
    value: 12,
    totalValue: 0,
    count: 0
  },
  {
    id: 2,
    img: '/image/order/chickenImg_2.svg',
    name: 'Swe Dish',
    value: 14,
    totalValue: 0,
    count: 0
  }
]

const orderTotalValue = [
  {
    id: 1,
    title: 'Subtotal',
    value: 0
  },
  {
    id: 2,
    title: 'Delivery',
    value: 25
  },
  {
    id: 3,
    title: 'Total',
    value: 0
  }
]

const PaymentReview = () => {

  const [orderValue, setOrderValue] = useState([])
  const [payment, setPayment] = useState([...paymentData])

  useEffect(() => {
    setOrderValue(
      orderTotalValue.map(item => {
        return {
          ...item,
          class: `value_${item.id}`
        }
      }))
  }, [orderTotalValue]);

  const onHandleIncrease = (id) => {
    setPayment(() => {
      return payment.map(v => {
        return v.id === id ? {...v, count: v.count + 1, totalValue: v.value + v.totalValue } : {...v}
      })
    })
  }

  const onHandleDecrease = (id) => {
    setPayment(payment.map(v => {
      if (v.count > 0) {
        return v.id === id ? {...v, count: v.count - 1, totalValue: v.totalValue  - v.value} : {...v}
      } else {
        return {...v}
      }
    }))
  }


  return (
    <section className="payment-review">
      <div className="payment">
        <div className="payment-items">
          {payment.map((item, id) => {
            return (
              <div className="payment-item" key={id}>
                <div className="payment-product">
                  <img src={item.img} alt="chicken food"/>
                  <div>
                    <h2 className="payment-product-name">{item.name}</h2>
                    <p className="payment-value">${item.value}</p>
                  </div>
                </div>
                <div className="product-count">
                  <div className="choose-count">
                    <button
                      className="count-decrease"
                      onClick={() => onHandleDecrease(item.id )}
                    >-</button>
                    <span className="item-count">{item.count}</span>
                    <button
                      className="count-increase"
                      onClick={() => onHandleIncrease(item.id)}
                    >+
                    </button>
                  </div>
                  <div className="product-total-value">
                    ${item.totalValue}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="order-coupon">
          <div className="coupon">
            <img src="/image/order/couponIcon.svg" alt="coupon" className="coupon-icon"/>
            <input type="text" placeholder="Apply Coupon" className="coupon-input"/>
          </div>
          <button className="coupon-apply">Apply</button>
        </div>
        <div className="order-total-payment">
          {orderValue.map((v, i) => {
            return (
              <div className={`order-payment ${v.class}`} key={i}>
                <p>{v.title}</p>
                <p>${v.value}</p>
              </div>
            )
          })}
        </div>
        <div className="order-review-payment">
          <div className="review-left-arrow">
            <img src="/image/order/leftArrow.svg" alt="left arrow"/>
          </div>
          <div>
            <button className="order-review-button">Review Payment</button>
          </div>
          <div className="review-right-arrow">
            <img src="/image/order/rightArrow.svg" alt="right arrow"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PaymentReview