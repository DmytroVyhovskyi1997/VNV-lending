import { useState } from "react";
import { Button } from "./ButtonOrder.styled";
import ModalOrder from "../ModalOrder/ModalOrder";

const ButtonOrder = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);


  const handleOpenModal = () => {
    setIsOpenModal(true);
   
  };
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <Button onClick={handleOpenModal}>Order</Button>
    
      <ModalOrder isOpen={isOpenModal} onClose={handleCloseModal}/>
      
    </>
  );
};

export default ButtonOrder;
