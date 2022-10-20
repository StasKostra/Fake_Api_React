import React from "react";
import { HeaderWrapper, NavL } from "./Header.styled-component";

export const Header = () => {
  return (
    <HeaderWrapper>
      <NavL to="/">Home</NavL>
      <NavL to="/products">Product</NavL>
      <NavL to="/sell">Sell</NavL>
      <NavL to="/basket">Basket</NavL>
    </HeaderWrapper>
  );
};
