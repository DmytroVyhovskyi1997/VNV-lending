import { AnimatedText } from './MultiPage.styled';
import { BiCalendarAlt } from 'react-icons/bi';
import { BiCalendarEdit } from 'react-icons/bi';
import { BiCalendarWeek } from 'react-icons/bi';
import ButtonOrder from '../ButtonOrder/ButtonOrder';



const MultiPage = () => {
  return (
    <AnimatedText>
      <h2>A huge field for creativity</h2>
      <p>
        You can use any number of pages to talk about your business, show your
        product, present your company or simply share useful information
      </p>
      <h3>Choose this type of site if:</h3>
      <ul>
        <li>
          <BiCalendarAlt size={19}/>
          You need more than one page on the site</li>
        <li>
          <BiCalendarEdit size={19}/>
          You plan to make a blog and/or a personal account</li>
        <li>
          <BiCalendarWeek size={19}/>
          Any other additional functionality is provided on the site</li>
      </ul>
      <ButtonOrder/>
    </AnimatedText>
  );
};

export default MultiPage;
