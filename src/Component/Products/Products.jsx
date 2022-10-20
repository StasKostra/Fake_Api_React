import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../Redux/reducers/data-reducer";
import { setLoader } from "../../Redux/reducers/products-reducer";
import { Header } from "../Header/Header";
import { Loader } from "../Loader/Loader";
import { Modal } from "../Modal/Modal";
import { Pagination } from "../Pagination/Pagination";
import { Product } from "./Product/Product";
import { ProductsWrapper, SectionWrapper } from "./Products.style-components";

export const Products = () => {
  const { currentPage, loader, modal, recordsPerPage, productId } = useSelector(
    (state) => state.productsPage
  );
  const { data } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      dispatch(setData(response.data));
      dispatch(setLoader());
    });
  }, []);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);
  return (
    <ProductsWrapper>
      <Header />
      <SectionWrapper>
        {modal && <Modal data={data} productId={productId} />}
        {loader && <Loader />}
        {currentRecords.map((product) => (
          <Product
            modal={modal}
            key={product.id}
            product={product}
            productId={productId}
          ></Product>
        ))}
      </SectionWrapper>
      <Pagination nPages={nPages} currentPage={currentPage} />
    </ProductsWrapper>
  );
};
