import ButtonOrder from "../../components/ButtonOrder/ButtonOrder";
import { Blog, P, Title } from "./Home.styled";

const Home = () => {
  return (
    <>
      <Title>Hello</Title>
      <P>
        We are VNV Solutions,
        <br />
        We create memorable Software & <br />
        positive client experience
      </P>

      <Blog>
        VNV Solutions aims to support entrepreneurs who want to have visible
        results for their businesses &<br /> discover new and creative ways to
        develop and optimize their businesses, using all development tools
        <br /> to help Your business achieve desired results
      </Blog>
      <ButtonOrder />
    </>
  );
};

export default Home;
