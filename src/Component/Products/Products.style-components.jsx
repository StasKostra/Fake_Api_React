import styled from "styled-components";
import backgroundImageProduct from "../../img/backgroundProduct.jpg";

export const ProductsWrapper = styled.div`
  padding: 0px;
  width: 100%;
  min-height: 725px;
  background-image: url(${backgroundImageProduct});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const SectionWrapper = styled.section`
  margin-top: 20px;
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: space-around;
  align-items: start;
`;
