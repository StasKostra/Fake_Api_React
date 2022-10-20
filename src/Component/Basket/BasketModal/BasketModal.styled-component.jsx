import styled from "styled-components";

export const BasketModalBackground = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
`;
export const BasketModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: spase-around;
  align-items: center;
  position: absolute;
  left: 30%;
  top: 20%;
  width: 500px;
  height: 300px;
  background: rgba(0, 0, 0, 1);
  gap: 20px;
`;
export const ButtonCloseModal = styled.button`
  width: 80px;
  height: 30px;
  font-size: 18px;
  text-decoration: none;
  background: #fac061;
  color: white;
  border: 1px solid white;
  text-align: center;
`;
export const BasketModalTitle = styled.h1`
  color: white;
  text-align: center;
`;
