import React from "react";
import { HomeWrapper, NavL, Title } from "./Home.styled-components";

export const Home = () => {
  return (
    <HomeWrapper>
      <Title>
        <NavL to="/">Home</NavL>
        <NavL to="/products">Products</NavL>
        <NavL to="/Sell">Sell</NavL>
        <NavL to="/basket">Basket</NavL>
      </Title>
    </HomeWrapper>
  );
};
