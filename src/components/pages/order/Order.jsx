import React from "react";
import Wrapper from "../wrapper/Wrapper";
import OrderHeader from "./orderDetail/OrderDetail";
import PaymentReview from "./paymentReview/PaymentReview";
import Banner from "../home/banner/Banner";


const Order = () => {
    return (
        <Wrapper>
                <OrderHeader />
                <PaymentReview />
                <Banner />
        </Wrapper>
    )
};

export default Order