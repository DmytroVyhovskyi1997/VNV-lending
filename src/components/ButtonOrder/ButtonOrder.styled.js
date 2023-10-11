import styled, { keyframes } from "styled-components";
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

export const Button = styled.button`
  color: white;
  width: 150px;
  height: 60px;
  background-color: #919683;
  border-radius: 30px;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  border: none;
  margin: 20px auto;
  display: block;
  cursor: pointer;
  animation: ${scaleText} 2s ease-in-out infinite;
  &:hover,
  focus {
    background-color: rgb(65, 144, 213);
    transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
