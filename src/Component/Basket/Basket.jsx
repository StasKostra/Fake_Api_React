import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTotalPrice } from "../../Redux/reducers/basket-reducer";
import { Header } from "../Header/Header";
import { BasketWrapper } from "./Basket.styled-component";
import { BasketModal } from "./BasketModal/BasketModal";
import { BasketProduct } from "./BasketProduct/BasketProduct";
import { EmptyBasket } from "./EmptyBasket/EmptyBasket";
import { TotalBlock } from "./TotalBlock/TotalBlock";

export const Basket = () => {
  const { basketProduct, totalPrice, basketModal } = useSelector(
    (state) => state.basketPage
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (basketProduct.length !== 0) {
      dispatch(setTotalPrice(basketProduct));
    }
  }, [basketProduct]);
  return (
    <BasketWrapper>
      <Header />
      {basketModal && <BasketModal />}
      {basketProduct.length !== 0 && <TotalBlock totalPrice={totalPrice} />}

      {basketProduct.length === 0 ? (
        <EmptyBasket />
      ) : (
        basketProduct.map((card) => {
          return <BasketProduct key={card.id} card={card} />;
        })
      )}
    </BasketWrapper>
  );
};
