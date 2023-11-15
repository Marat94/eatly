import React from "react";
import './orderDetail.css'

const OrderDetail = () => {
  return (
    <section className="order-detail">
      <div className="order-detail-item">
        <div className="order-card">
          <div className="order-card-header">
            <div className="rider-img">
              <img src="/image/order/courierImg.svg" alt="courier img"/>
            </div>
            <div className="courier-info">
              <h1 className="rider-name">David Smith</h1>
              <p className="rider-info">Food Rider</p>
            </div>
          </div>
          <div className="order-card-details">
            <div className="order-del-info">
              <div className="order-location">
                <img src="/image/order/location.svg" alt="location"/>
                <div>
                  <h1 className="order-address-title">Your Address</h1>
                  <p className="order-address">Horizontal Road Street 1178 California, USA</p>
                </div>
              </div>
              <div className="order-time">
                <img src="/image/order/time.svg" alt="time"/>
                <div>
                  <h1 className="order-time-title">Delivery Time</h1>
                  <p className="order-delivery-time">15 Minutes</p>
                </div>
              </div>
            </div>
            <div className="order-status">
              <p>Pending</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OrderDetail