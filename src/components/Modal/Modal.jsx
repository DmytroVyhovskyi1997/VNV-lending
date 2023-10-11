import { AiFillCloseCircle } from 'react-icons/ai';

import {
  ModalOverlay,
  ModalContainer,
  ModalContent,
  CloseButton,
} from "./Modal.styled";



const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={onClose}><AiFillCloseCircle size={32} /></CloseButton>
        
        <ModalContent>{children}</ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
