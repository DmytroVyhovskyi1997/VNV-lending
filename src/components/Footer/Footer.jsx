import {
  Box,
  Email,
  LogoBox,
  Logo,
  Li,
  FormBox,
  FormTitle,
  Title,
} from "./Footer.styled";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import { BiLogoTiktok } from "react-icons/bi";
import FormFooter from "../FormFooter/FormFooter";

const Footer = () => {
  return (
    <div>
      <FormBox>
        <FormTitle>
          Would you like to order a site?
          <br />
          Fill out the form
        </FormTitle>
        <FormFooter />
      </FormBox>
      <Box>
        <div>
          <Email href="mailto:team@vnv.solutions">team@vnv.solutions</Email>
        </div>
        <LogoBox>
          <Title>Our contacts :</Title>
          <Logo>
            <Li>
              <BsFacebook size={42} color="#4190d5" />
            </Li>
            <Li>
              <BsInstagram size={42} color="#4190d5" />
            </Li>
            <Li>
              <FaTelegram size={42} color="#4190d5" />
            </Li>
            <Li>
              <BiLogoTiktok size={42} color="#4190d5" />
            </Li>
          </Logo>
        </LogoBox>
      </Box>
    </div>
  );
};

export default Footer;
