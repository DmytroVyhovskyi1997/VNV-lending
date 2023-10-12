import { BiCalendarAlt } from "react-icons/bi";
import { BiCalendarEdit } from "react-icons/bi";
import { BiCalendarWeek } from "react-icons/bi";
import ButtonOrder from "../ButtonOrder/ButtonOrder";
import { AnimatedText } from "../MultiPage/MultiPage.styled";

const LandingPage = () => {
  return (
    <AnimatedText>
      <h2>
        Ideal for businesses that need a short but meaningful presentation
      </h2>
      <p>
        Thanks to the convenience of this format, you can easily provide the
        user with all the important information and quickly lead them to the
        purchase
      </p>
      <h3>Choose this type of site if:</h3>
      <ul>
        <li>
          <BiCalendarAlt size={19} />
          You want to present your own information product, service, book, etc.
        </li>
        <li>
          <BiCalendarEdit size={19} />
          You have a small number of products (up to 8)
        </li>
        <li>
          <BiCalendarWeek size={19} />
          You need a short portfolio of a specialist or a business card site
        </li>
      </ul>
      <ButtonOrder />
    </AnimatedText>
  );
};

export default LandingPage;
