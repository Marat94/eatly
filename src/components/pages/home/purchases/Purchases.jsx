import React, {useEffect, useState} from "react";
import "./purchases.css";

const purchaseData = [
  {
    id: 1,
    image: '/image/purchase/chickenHell.svg',
    name: 'Chicken Hell',
    status: 'On The Way',
    date: '3:09 PM',
  },
  {
    id: 2,
    image: '/image/purchase/swedish.svg',
    name: 'Swe Dish',
    status: 'Delivered',
    date: 'Yesterday',
  },
  {
    id: 3,
    image: '/image/purchase/fishHell.svg',
    name: 'Fish Hell Veg',
    status: 'Cancelled',
    date: 'Yesterday',
  }
];

const savingsData = [
  {
    id: 1,
    title: 'Expense',
    percentText: 'Increased By 10%',
    price: '$409.00',
    image: 'image/purchase/walletIcon.svg'
  },
  {
    id: 2,
    title: 'Voucher Usage',
    percentText: 'Increased By 5%',
    price: '$45.78',
    image: 'image/purchase/moneyIcon.svg'
  }
]


const Purchases = () => {

  const [purchaseItem, setPurchaseItem] = useState([])
  const [savingsItem, setSavingsItem] = useState([])

  useEffect(() => {
    setPurchaseItem(purchaseData.map(item => {
      return {
        ...item,
        class: `item_${item.id}`
      }
    }))
  }, [purchaseData]);

  useEffect(() => {
    setSavingsItem(savingsData.map(value => {
      return {
        ...value,
        class: `dash_${value.id}`
      }
    }))
  }, [savingsData]);

  return (
    <section className="purchase-control">
      <div className="purchase">
        <div className="purchase-info">
          <h1 className="purchase-title">Control <span>Purchases</span> Via Dashboard</h1>
          <div className="purchase-dash">
            {purchaseItem.map(v => {
              return (
                <div className={`purchase-item ${v.class}`} key={v.id}>
                  <div className="item-image"><img src={v.image} alt="food image"/></div>
                  <div className="item-info">
                    <h2 className="item-name">{v.name}</h2>
                    <p className="item-status">{v.status}</p>
                  </div>
                  <div className="item-date"><p>{v.date}</p></div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="savings">
          <div className="savings-date">
            <h2>Purchases</h2>
            <div className="savings-form">
              <select name="date" id="date">
                <option value="">This Month</option>
                <option value="1">January</option>
                <option value="2">February</option>
              </select>
            </div>
          </div>


          {savingsItem.map(v => {
            return (
              <div className={`savings-dash ${v.class}`} key={v.id}>
                <div className="savings-item">

                  <div className="savings-info">
                    <div className="savings-img"><img src={v.image} alt=""/></div>
                    <div className="savings-text">
                      <h2 className="savings-title">{v.title}</h2>
                      <p className="percent-info">{v.percentText}</p>
                    </div>

                  </div>
                  <h1 className="savings-price">{v.price}</h1>
                </div>
                <div className="rectangle-par">
                  <div className="rectangle-child"></div>
                </div>
              </div>
            )
          })}

        </div>
      </div>

      <hr/>
    </section>

  )
};

export default Purchases;