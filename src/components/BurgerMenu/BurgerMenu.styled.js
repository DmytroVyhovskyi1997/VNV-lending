import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";


export const BurgerWrapper = styled.div`
@media screen and (max-width: 767px){
  cursor: pointer;
}
@media screen and (min-width: 767px){
    display:none;
}
`;

export const Menu = styled.div`
@media screen and (max-width: 767px){
  position: fixed;
  width: 50%;
  height: 100%;
  top: 0;
  right: 0;
  background-color: #919683;
  padding: 10px;
  border: none;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  z-index: 999;
  display: ${(props) => (props.isOpen ? "block" : "none")};
}
`;

export const MenuItem = styled.div`
@media screen and (max-width: 767px){
  margin: 10px 0;
  display: flex;
    justify-content: space-around;
}
`;

export const Burger = styled(GiHamburgerMenu)`
@media screen and (max-width: 767px){
  position: absolute;
  right: 0;
  top:50px;
}
`;
export const ButtonClose = styled(IoCloseSharp)`
@media screen and (max-width: 767px){
    position: absolute;
    right: 0;
    top: 10px;
  }
`

export const Link = styled(NavLink)`
@media screen and (max-width: 767px){
  border-radius: 4px;
  text-decoration: none;
  color: white;
  padding: 4px 20px;
  font-weight: 500;
  font-weight: bold;
  font-size: 28px;
  line-height: 55px;
  text-aline:center;
  margin-top:20px;
  &.active {
    color: #4190d5;
    background-color: #262424;
  }
  &:hover,
  &:focus {
    color: rgb(65, 144, 213);
    transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
}
`;
