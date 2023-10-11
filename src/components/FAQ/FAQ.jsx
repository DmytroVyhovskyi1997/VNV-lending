import {
  Box,
  Answers,
  Fa,
  BoxQuestions,
  BoxAnswers,
  BoxIcon,
} from "./FAQ.styled";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { useState } from "react";
import Modal from "../Modal/Modal";

const FAQ = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalText, setModalText] = useState("");

  const openModal = (text) => {
    setIsModalOpen(true);
    setModalText(text);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const questions1 = () => [
    "Yes, after discussing the work plan, we sign the contract together using a digital signature.The contract regulates the entire process of work, payments, any unforeseen circumstances and other important parts of the project. This document protects both parties - both the customer and the contractor.",
  ];
  const questions2 = () => [
    "There are two payment options: full subscription and installment subscription.Full subscription involves the transfer of the entire amount for the project immediately at the beginning of cooperation.Staged subscription involves paying in installments for each stage (or several).An invoice (check) with information about the paid service or stage is attached to each payment transaction.",
  ];
  const questions3 = () => [
    "Yes, you can.How it works: In any case, 5% and a bank commission are deducted from the refund amount. Funds are returned only for those stages of the project that have not been started. All work that has been completed and paid for is sent to the customer. Stages that have been started are always completed (at the request of the customer).",
  ];
  const questions4 = () => [
    "No, just create a site from scratch. The existing site can be used as an example for design, content, etc., but this does not imply a reduction in the cost of the service.",
  ];

  return (
    <>
      <Answers>Answers to frequently asked questions</Answers>
      <Fa>FAQ</Fa>
      <Box>
        <BoxQuestions>
          <BoxAnswers>
            Do I need to sign a contract before work?
            <BoxIcon type="button" onClick={() => openModal(questions1())}>
              <BsFillArrowUpCircleFill size={28} />
            </BoxIcon>
          </BoxAnswers>
          <BoxAnswers>
            How is payment made?
            <BoxIcon type="button" onClick={() => openModal(questions2())}>
              <BsFillArrowUpCircleFill size={28} />
            </BoxIcon>
          </BoxAnswers>
          <BoxAnswers>
            Can I get a refund after payment?
            <BoxIcon type="button" onClick={() => openModal(questions3())}>
              <BsFillArrowUpCircleFill size={28} />
            </BoxIcon>
          </BoxAnswers>
          <BoxAnswers>
            Is it possible to improve an existing site?
            <BoxIcon type="button" onClick={() => openModal(questions4())}>
              <BsFillArrowUpCircleFill size={28} />
            </BoxIcon>
          </BoxAnswers>
        </BoxQuestions>
      </Box>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {modalText}
      </Modal>
    </>
  );
};

export default FAQ;
