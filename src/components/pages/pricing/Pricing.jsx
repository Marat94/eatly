import React from "react";
import Purchases from "../home/purchases/Purchases";
import Wrapper from "../wrapper/Wrapper";
import PriceCard from "./priceCard/PriceCard";

const Pricing = () => {

    return (
        <Wrapper>
                <PriceCard />
                <Purchases />
        </Wrapper>
    )
}

export default Pricing