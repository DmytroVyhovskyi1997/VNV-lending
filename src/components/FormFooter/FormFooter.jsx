import { Button, Form, Input, BoxIcon } from "./FormFooter.styled";
import { HiOutlineMail } from "react-icons/hi";

const FormFooter = () => {
  return (
    <>
      <Form>
        <BoxIcon>
          <HiOutlineMail size={100} color="white" />
        </BoxIcon>
        <Input placeholder="Name" />
        <Input placeholder="Email" />
        <Button type="button">Send</Button>
      </Form>
    </>
  );
};

export default FormFooter;
