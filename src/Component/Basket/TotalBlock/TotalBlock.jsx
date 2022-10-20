import React from "react";
import { useDispatch } from "react-redux";
import {
  setBasketModal,
  setClearBasketProduct,
} from "../../../Redux/reducers/basket-reducer";
import {
  ButtonCheck,
  ButtonClear,
  ButtonSection,
  TotalBlockTitle,
  TotalBlockWrapper,
} from "./TotalBlock.styled-component";

export const TotalBlock = (props) => {
  const dispatch = useDispatch();
  return (
    <TotalBlockWrapper>
      <TotalBlockTitle>Total Payments: ${props.totalPrice}</TotalBlockTitle>
      <ButtonSection>
        <ButtonCheck onClick={() => dispatch(setBasketModal())}>
          CHECK OUT
        </ButtonCheck>
        <ButtonClear onClick={() => dispatch(setClearBasketProduct())}>
          CLEAR
        </ButtonClear>
      </ButtonSection>
    </TotalBlockWrapper>
  );
};
