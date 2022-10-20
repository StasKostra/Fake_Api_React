import React from "react";
import { useDispatch } from "react-redux";
import {
  setDeleteBasketProduct,
} from "../../../Redux/reducers/basket-reducer";
import {
  BasketProductWrapper,
  ButtonDelete,
  CardImg,
  CardTitle,
} from "./BasketProduct.styled-component";

export const BasketProduct = (props) => {
  const dispatch = useDispatch();
  const HandleDelete = () => {
    dispatch(setDeleteBasketProduct(props.card.id));
  };

  return (
    <BasketProductWrapper>
      <CardImg src={props.card.image} />
      <CardTitle>{props.card.title}</CardTitle>
      <ButtonDelete onClick={HandleDelete}>Delete</ButtonDelete>
    </BasketProductWrapper>
  );
};
