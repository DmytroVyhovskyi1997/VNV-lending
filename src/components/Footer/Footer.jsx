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
              <Email href="https://www.facebook.com/people/VNV-Solutions/100088433736254/">
                <BsFacebook size={42} color="#4190d5" />
              </Email>
            </Li>
            <Li>
              <Email href="https://www.instagram.com/vnv_solutions/?igshid=MWI4MTIyMDE%3D">
                <BsInstagram size={42} color="#4190d5" />
              </Email>
            </Li>
            <Li>
              <Email href="https://t.me/vnv_solutions">
                <FaTelegram size={42} color="#4190d5" />
              </Email>
            </Li>
            <Li>
              <Email href="https://www.tiktok.com/@vnvsolutions?_t=8YVB28bloQP&_r=1">
                <BiLogoTiktok size={42} color="#4190d5" />
              </Email>
            </Li>
          </Logo>
        </LogoBox>
      </Box>
    </div>
  );
};

export default Footer;
