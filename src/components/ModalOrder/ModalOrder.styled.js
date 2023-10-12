import styled from "styled-components";

export const ModalBox = styled.div`
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
  background-color: black;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: relative;

  padding-left: 25px;
  padding-right: 25px;
  padding-top: 60px;
  margin: 12px auto;
  border: 2px solid #ccc;
  border-radius: 20px;
  z-index: 1;
`;

export const ModalContent = styled.div`
  border-radius: 10px;
  padding: 10px 30px;
  font-size: 24px;
  font-weight: bold;
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 18px;
  &:hover,
  focus {
    color: #4190d5;
    animation: fsjOeB 3s infinite;
  }
`;
