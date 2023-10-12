import styled, { keyframes } from "styled-components";

export const Email = styled.a`
  color: #4190d5;
  font-size: 28px;
  text-decoration: underline;
`;

export const Box = styled.div`
  align-items: center;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin-top: 200px;
    margin-bottom: 100px;
  }
`;
export const LogoBox = styled.div`
  margin-right: 100px;
`;

export const Logo = styled.ul`
  display: flex;
`;
const scaleText = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;
export const Li = styled.li`
  padding-right: 20px;
  &:hover,
  focus {
    animation: ${scaleText} 1s ease-in-out infinite;
  }
`;

export const FormBox = styled.div`
  display: flex;
  margin-top: 150px;
`;

export const FormTitle = styled.p`
  color: white;
  font-size: 32px;
  font-weight: bold;
  cursor: pointer;
  &:hover,
  focus {
    color: #4190d5;
    animation: fsjOeB 3s infinite;
  }
`;

export const Title = styled.p`
  color: white;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
`;
