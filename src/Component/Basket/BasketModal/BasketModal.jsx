import React from "react";
import { useDispatch } from "react-redux";
import { setCloseBasketModal } from "../../../Redux/reducers/basket-reducer";
import { Spinner } from "../Spinner/Spinner";
import {
  BasketModalBackground,
  BasketModalTitle,
  BasketModalWrapper,
  ButtonCloseModal,
} from "./BasketModal.styled-component";

export const BasketModal = () => {
  const dispatch = useDispatch();
  return (
    <>
      <BasketModalBackground />
      <BasketModalWrapper>
        <BasketModalTitle>Checked Out Successfully!</BasketModalTitle>
        <Spinner />
        <ButtonCloseModal onClick={() => dispatch(setCloseBasketModal())}>
          OK
        </ButtonCloseModal>
      </BasketModalWrapper>
    </>
  );
};
