import { NavLink } from "react-router-dom";
import styled from "styled-components";
import backgroundImageHome from "../../img/backgroundHome.jpg";

export const HomeWrapper = styled.div`
  padding: 0px;
  width: 100%;
  min-height: 725px;
  background-image: url(${backgroundImageHome});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const Title = styled.h1`
  position: absolute;
  bottom: -50px;
  color: white;
  font-size: 4rem;
  display: flex;
  flex-direction: column;
`;

export const NavL = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 150px;
  &:hover {
    transition-duration: 0.3s;
    text-shadow: 0px 0px 9px rgba(137, 139, 141, 1);
  }
`;
