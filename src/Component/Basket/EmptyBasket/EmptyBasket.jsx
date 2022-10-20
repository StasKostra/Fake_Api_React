import React from "react";
import {
  EmptyBasketTitle,
  EmptyBasketWrapper,
  NavlinkBasket,
} from "./EmptyBasket.styled.component";

export const EmptyBasket = () => {
  return (
    <EmptyBasketWrapper>
      <EmptyBasketTitle>You card is empty!</EmptyBasketTitle>
      <NavlinkBasket to="/products"> Back to Shop</NavlinkBasket>
    </EmptyBasketWrapper>
  );
};
