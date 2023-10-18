import { Outlet } from "react-router-dom";
import { Container, Link, Header, Logo, Img } from "./Layout.styled";
import Footer from "../Footer/Footer";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Layout = () => {
  return (
    <Container>
      <Header>
      <BurgerMenu/>
        <Logo>
          <Img src="https://vnv.solutions/img/vnv%20logo-05.png" alt="Logo" />
        </Logo>
        <nav>
          <Link to="/">Home</Link>
          <Link to="order">Order</Link>
        </nav>
      </Header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </Container>
  );
};

export default Layout;
