import styled, { keyframes } from "styled-components";

export const Email = styled.a`
  color: #4190d5;
  font-size: 28px;
  text-decoration: underline;
  @media screen and (max-width: 767px) {
    display:flex;
    justify-content: center;
    font-size: 22px;
    margin-top:30px;
  }
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
@media screen and (min-width: 1200px) {
  margin-right: 100px;
}
`;

export const Logo = styled.ul`
  display: flex;
  @media screen and (max-width: 767px) {
    justify-content: center;
    margin-bottom:50px;
  }
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
  @media screen and (max-width: 767px) {
    margin-top: 50px;
    flex-wrap: wrap;

  }
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
  @media screen and (max-width: 767px) {
    margin-bottom:60px;
    text-align: center;
  }

`;

export const Title = styled.p`
  color: white;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: 22px;
    display:flex;
    justify-content: center;
  }
`;
