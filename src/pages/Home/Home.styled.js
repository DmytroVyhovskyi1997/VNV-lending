import styled, { keyframes } from "styled-components";

const blink = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
export const Title = styled.h2`
display: flex;
justify-content: center;
color: white;
font-weight: 100;
font-size: 100px;
line-height: 56px;
margin-bottom: 100px;
animation: ${blink} 3s infinite;
cursor: pointer;
&:hover,
focus {
  color: rgb(65, 144, 213);
  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}
@media screen and (min-width: 768px) {
  font-weight: 200;
font-size: 200px;
line-height: 56px;
margin-bottom: 250px;
}
`;

const colorChange = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const P = styled.p`
  display: flex;
  justify-content: center;
  color: white;
  font-weight: 200;
  font-size: 44px;
  line-height: 56px;
  margin-bottom: 150px;
  cursor: pointer;
  animation: ${colorChange} 5s;
  animation-iteration-count: 1;
  &:hover,
  focus {
    color: rgb(65, 144, 213);
    transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
const BlogChange = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const Blog = styled.p`
  display: flex;
  justify-content: center;
  color: white;
  font-weight: 200;
  font-size: 18px;
  line-height: 56px;
  margin-bottom: 80px;
  cursor: pointer;
  animation: ${BlogChange} 5s;
  animation-iteration-count: 1;
  &:hover,
  focus {
    color: rgb(65, 144, 213);
    transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

