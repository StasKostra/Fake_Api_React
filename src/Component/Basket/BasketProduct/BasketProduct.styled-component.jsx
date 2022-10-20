import styled from "styled-components";

export const BasketProductWrapper = styled.div`
  width: 90%;
  height: 8rem;
  display:flex;
  justify-content:space-between;
  align-items center;
  margin-top:10px;
  background-color: rgba(0, 0, 0, 0.3);
  margin-left:50px;
  border:1px solid white;
`;

export const CardTitle = styled.h1`
  color: white;
`;
export const CardImg = styled.img`
  width: 90px;
  height: 100%;
`;

export const ButtonDelete = styled.button`
  width: 100px;
  height: 40px;
  background: rgba(0, 0, 0, 0.4);
  color: red;
  border: 1px solid red;
`;
