import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBasketProduct } from "../../../Redux/reducers/basket-reducer";
import {
  setProductId,
  showModal,
} from "../../../Redux/reducers/products-reducer";
import {
  ButtonBuy,
  Price,
  ProductHover,
  ProductImg,
  ProductTitle,
  ProductWrapper,
} from "./Product.styled-component";

export const Product = (props) => {
  const { basketProduct } = useSelector((state) => state.basketPage);
  let existsInBasket = basketProduct.find(({ id }) => props.product.id === id);
  const [disabled, setDisabled] = useState(existsInBasket);
  const dispatch = useDispatch();

  useEffect(() => {
    setDisabled(existsInBasket);
  }, [basketProduct]);

  const HendleProduct = () => {
    dispatch(setProductId(props.product.id - 1));
    dispatch(showModal());
  };
  const HendleBuy = (e) => {
    dispatch(setBasketProduct(props.product));
  };
  return (
    <ProductWrapper>
      <ProductHover onClick={HendleProduct}>
        <ProductTitle>{props.product.title}</ProductTitle>
        <ProductImg alt={props.product.title} src={props.product.image} />
        <Price>${props.product.price}</Price>
      </ProductHover>
      <ButtonBuy onClick={HendleBuy} disabled={disabled}>
        Buy
      </ButtonBuy>
    </ProductWrapper>
  );
};
