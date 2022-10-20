import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: absolute;
  width: 600px;
  height: 550px;
  background: rgba(0, 0, 0, 0.9);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding:10px;
`;
export const ModalTitle = styled.h1`
  font-size: 30px;
`;
export const ModalImg = styled.img`
  width: 130px;
`;
export const ModalDiscription = styled.p`
  width: 500px;
  font-size: 15px;
`;
export const ModalPrice = styled.h3`
  color: #fac061;
  font-size: 30px;
`;

export const ButtonLock = styled.button`
  font-size: 20px;
  position: absolute;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.9);
  color: white;
  border: none;
`;
