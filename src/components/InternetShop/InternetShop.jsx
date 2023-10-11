import { BiCalendarAlt } from 'react-icons/bi';
import { BiCalendarEdit } from 'react-icons/bi';
import { BiCalendarWeek } from 'react-icons/bi';
import { BiCalendar } from 'react-icons/bi';
import { AnimatedText } from '../MultiPage/MultiPage.styled';

import ButtonOrder from '../ButtonOrder/ButtonOrder';

const InternetShop = () => {
  return (
    <AnimatedText>
      <h2>A convenient site for business that will allow users to:</h2>
      <ul>
        <li>
            <BiCalendarAlt size={19}/>
            Quickly find the desired product</li>
        <li>
            <BiCalendarEdit size={19}/>
            Make an order at any time</li>
      </ul>
      <p>
The catalog, convenient filtering, a personal account and a well-thought-out interface will definitely increase the number of your customers thanks to comfortable use and easy purchase processing</p>
<h3>Choose this type of site if:</h3>
      <ul>
        <li>
            <BiCalendarWeek size={19}/>
            You have more than 8 products</li>
        <li>
            <BiCalendar size={19}/>
            You need a catalog, shopping cart, personal account or other pages of this type</li>
      </ul>
      <ButtonOrder/>
    </AnimatedText>
  );
};

export default InternetShop;
