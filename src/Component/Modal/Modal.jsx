import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../Redux/reducers/products-reducer";
import {
  ButtonLock,
  ModalDiscription,
  ModalImg,
  ModalPrice,
  ModalTitle,
  ModalWrapper,
} from "./Modal.styled-component";

export const Modal = (props) => {
  const ProductClick = props.data[props.productId];
  const dispatch = useDispatch();
  return (
    <ModalWrapper>
      <ModalTitle>{ProductClick.title}</ModalTitle>
      <ModalImg src={ProductClick.image} />
      <ModalDiscription>{ProductClick.description}</ModalDiscription>
      <ModalPrice>${ProductClick.price}</ModalPrice>
      <ButtonLock onClick={() => dispatch(closeModal())}>X</ButtonLock>
    </ModalWrapper>
  );
};
