import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

export const Text = styled.p`
  font-weight: bold;
  font-size: 24px;
  display: flex;
  color: white;
  margin-top: 100px;
  justify-content: space-around;
`;
const slideInLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const Box = styled.li`
  width: 370px;
  height: 200px;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-end;
  animation: ${slideInLeft} 1s ease-in-out;
  @media screen and (min-width: 767px) {
    width: 330px;
  }
  @media screen and (min-width: 1200px) {
    width: 370px;
  }
`;
export const Block = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  padding: 0;
  @media screen and (max-width: 767px) {
  justify-content: space-evenly;
  }
`;

export const Services = styled.div`
  width: auto;
  height: auto;
  padding: 10px 20px;
  margin-top: 100px;
  border-radius: 10px;
  background-color: white;
`;

export const BoxLink = styled.ul`
  padding: 0;
  background-color: black;
  padding: 20px;
  border-radius: 10px;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-around;
  }
`;

export const Link = styled(NavLink)`
  padding: 15px 15px;
  margin-right: 100px;
  border-radius: 5px;

  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 14px;
  line-height: 44px;

  &.active {
    color: #4190d5;
    background-color: #262424;
    border: 1px solid white;
  }
  &:hover,
  focus {
    color: rgb(65, 144, 213);
    transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
  @media screen and (min-width: 767px) and (max-width: 1999px) {
    margin-right: 0;
  }
`;
