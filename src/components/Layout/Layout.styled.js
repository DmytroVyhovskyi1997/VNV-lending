import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Link = styled(NavLink)`
  border-radius: 4px;
  text-decoration: none;
  color: white;
  padding: 8px 30px;
  font-weight: 500;
  font-weight: bold;
  font-size: 38px;
  line-height: 44px;
  &.active {
    color: #4190d5;
    background-color: #262424;
  }
  &:hover,
  focus {
    color: rgb(65, 144, 213);
    transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
  @media screen and (min-width: 768px) {
    margin-right: 100px;
  }
`;

export const Header = styled.header`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 8px 0;
    margin-bottom: 16px;
    border-bottom: 1px solid black;

    > nav {
      display: flex;
    }
  }
`;

export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
`;

export const Img = styled.img`
  width: 150px;
  height: 150px;
`;
