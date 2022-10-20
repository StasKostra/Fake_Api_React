import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const EmptyBasketWrapper = styled.div`
  width:400px;
  height:200px;
  background:rgba(0,0,0,0.5);
  display:flex;
  flex-direction:column;
  align-items:center:
  justify-content:center;
  margin-left: auto;
  margin-right: auto;
  margin-top:50px;
`;

export const EmptyBasketTitle = styled.h1`
  text-align: center;
  color: white;
  font-size: 30px;
`;

export const NavlinkBasket = styled(NavLink)`
  display: flex;
  align-items: center;
  width: 100px;
  height: 30px;
  font-size: 18px;
  text-decoration: none;
  background: #fac061;
  color: white;
  border: 1px solid white;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  vertical-align: center;
  margin-top: 50px;
`;
