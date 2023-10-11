import { BiCalendarEdit } from 'react-icons/bi';
import { BiCalendarWeek } from 'react-icons/bi';
import ButtonOrder from '../ButtonOrder/ButtonOrder';
import { AnimatedText } from '../MultiPage/MultiPage.styled';

const Consultation = () => {
  return (
    <AnimatedText>
      <h2>An ideal start to promote your business on the Internet</h2>
      <p>
        In addition to a ready-made foundation for your own site, you will
        receive recommendations that will help you quickly achieve success in
        promoting your business
      </p>
      <ul>
        <li>
            < BiCalendarEdit size={19}/>
            Consultation lasts 1.5 hours in online format</li>
        <li>
            <BiCalendarWeek size={19}/>
            You can indicate additional questions about your business and, upon prior agreement, I will include them in our consultation</li>
      </ul>
      <ButtonOrder/>
    </AnimatedText>
  );
};

export default Consultation;
