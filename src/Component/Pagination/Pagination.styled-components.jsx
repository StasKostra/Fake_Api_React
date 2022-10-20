import styled from "styled-components";

export const PaginationWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
export const Button = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 40px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid white;
  color: white;
  font-size: 28px;
  &:hover {
    transition-duration: 0.4s;
    background: white;
    color: black;
    box-shadow: 0px 0px 9px rgba(137, 139, 141, 1);
  }
`;

export const Number = styled.h2`
  color: white;
  font-size: 50px;
`;
