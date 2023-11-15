import Wrapper from "../wrapper/Wrapper";
import Filter from "./filter/Filter";
import Restaurants from "../home/restaurants/Restaurants";
import Dishes from "../home/dishes/Dishes";
import Questions from "./questions/Questions";
import React from "react";

const Menu = () => {
  return (
    <Wrapper>
      <Filter/>
      <Restaurants/>
      <Dishes/>
      <Questions/>
    </Wrapper>
  )
};

export default Menu;