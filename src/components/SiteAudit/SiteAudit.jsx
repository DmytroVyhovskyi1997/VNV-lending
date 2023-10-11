import { BiCalendarAlt } from 'react-icons/bi';
import { BiCalendarEdit } from 'react-icons/bi';
import { BiCalendarWeek } from 'react-icons/bi';
import { BiCalendar } from 'react-icons/bi';
import ButtonOrder from '../ButtonOrder/ButtonOrder';
import { AnimatedText } from '../MultiPage/MultiPage.styled';


const SiteAudit = () => {
  return (
    <AnimatedText >
      <h2>A detailed audit of your site on all possible parameters</h2>
      <p>
        The audit considers: design, text, conversion, technical data, indexing
        by search engines and many other characteristics
      </p>
      <h3>The audit will help you:</h3>
      <ul>
        <li>
            <BiCalendarAlt size={19}/>
            See mistakes made</li>
        <li>
            <BiCalendarEdit size={19}/>
            Find the right approach to your customers</li>
        <li>
            <BiCalendarWeek size={19}/>
            Multiply the conversion rate</li>
        <li>
            <BiCalendar size={19}/>
            Get dozens of new ideas for the site and much more.</li>
      </ul>
      <ButtonOrder/>
    </AnimatedText >
  );
};

export default SiteAudit;
