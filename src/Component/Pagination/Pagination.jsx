import React from "react";
import { useDispatch } from "react-redux";
import {
  setDecrementCurrentPage,
  setIncrementCurrentPage,
} from "../../Redux/reducers/products-reducer";
import {
  Button,
  Number,
  PaginationWrapper,
} from "./Pagination.styled-components";

export const Pagination = (props) => {
  const dispatch = useDispatch();
  console.log(props);
  const nextPage = () => {
    if (props.currentPage !== props.nPages) dispatch(setIncrementCurrentPage());
  };

  const prevPage = () => {
    if (props.currentPage !== 1) dispatch(setDecrementCurrentPage());
  };

  return (
    <PaginationWrapper>
      <Button onClick={prevPage}>&larr;</Button>
        <Number>{props.currentPage}</Number>
      <Button onClick={nextPage}>&rarr;</Button>
    </PaginationWrapper>
  );
};
