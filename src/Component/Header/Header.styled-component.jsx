import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const NavL = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 100px;
  &:hover {
    transition-duration: 0.4s;
    text-shadow: 0px 0px 9px rgba(137, 139, 141, 1);
  }
`;
