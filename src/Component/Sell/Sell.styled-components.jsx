import styled from "styled-components";
import backgroundSell from "../../img/backgroundSell.jpg";

export const SellWrapper = styled.div`
  width: 100%;
  min-height: 725px;
  background-image: url(${backgroundSell});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const FormSell = styled.form`
  position: absolute;
  top: 25%;
  left: 35%;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.4);
`;
export const FormTitle = styled.h2`
  color: white;
  font-size: 35px;
`;
export const InputText = styled.input`
  width: 75%;
  height: 50px;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.6);
  margin-bottom: 10px;
  color: White;
  font-size: 20px;
  &:focus {
    border: 1px solid white;
    outline: none;
  }
`;
export const SelectSell = styled.select`
  width: 75%;
  font-size: 20px;
  background: rgba(0, 0, 0, 0.5);
  color: White;
  height: 50px;
`;

export const SubmitSell = styled.button`
  background: rgba(0, 0, 0, 0.5);
  width: 100px;
  height: 50px;
  border: 1px solid white;
  color: white;
  margin-top: 20px;
  border-radius: 2px;
  font-size: 20px;
  &:hover {
    background: white;
    color: rgba(0, 0, 0, 0.6);
  }
`;
