import FormOrder from "../FormOrder/FormOrder";
import {
  ModalBox,
  ModalContainer,
  ModalContent,
  CloseButton,
} from "./ModalOrder.styled";
import { AiFillCloseCircle } from "react-icons/ai";

const ModalOrder = ({ isOpen, children, onClose }) => {
  if (!isOpen) return null;
  return (
    <ModalBox>
      <ModalContainer>
        <FormOrder/>
        <CloseButton onClick={onClose}>
          <AiFillCloseCircle size={32} />
        </CloseButton>
        <ModalContent>{children}</ModalContent>
      </ModalContainer>
    </ModalBox>
  );
};

export default ModalOrder;
