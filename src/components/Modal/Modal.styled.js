import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  padding: 20px;
  position: relative;
  background-color: black;
  padding: 40px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: relative;
  margin: 12px auto;
  border: 2px solid #ccc;
  border-radius: 20px;
  z-index: 1;
`;

export const ModalContent = styled.div`
  width: 200px;
  height: 300px;
  border-radius: 10px;
  padding: 10px 30px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  @media screen and (min-width: 768px) {
    width: 400px;
    height: 400px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: white;
  &:hover {
    color: #4190d5;
    animation: fsjOeB 3s infinite;
  }
`;
