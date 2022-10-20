import styled from "styled-components";

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid grey;
  background: rgba(0, 0, 0, 0.3);
  color: white;
`;

export const ProductHover = styled.div`
  width: 220px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const ProductTitle = styled.h1`
  color: white;
  width: 90%;
  height: 150px;
`;
export const ProductImg = styled.img`
  width: 95px;
`;
export const Price = styled.p`
  font-size: 19px;
  color: #fac061;
`;
export const ButtonBuy = styled.button`
  width: 60px;
  height: 30px;
  background: #fac061;
  color: white;
  border: 1px solid white;
  margin-bottom: 10px;
  &:disabled {
    // opacity: 0.6;
    cursor: not-allowed;
    background: rgba(0, 0, 0, 0.5);
  }
  &:hover {
    transition-duration: 0.4s;
    background: rgba(0, 0, 0, 0.5);
    color: #fac061;
  }
`;
