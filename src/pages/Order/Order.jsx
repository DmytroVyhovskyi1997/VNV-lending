import ButtonOrder from "../../components/ButtonOrder/ButtonOrder";
import FAQ from '../../components/FAQ/FAQ'
import { Text, Box, Block, Services, BoxLink, Link } from "./Order.styled";
import { Outlet, useNavigate  } from "react-router-dom";
import React, { useEffect} from "react";
import OurProject from "../../components/OurProject/OurProject";

const Order = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        const pageFromLocalStorage = localStorage.getItem("selectedPage");
        if (pageFromLocalStorage) {
          navigate(pageFromLocalStorage); 
        }
      }, [navigate]);

      const handlePageLinkClick = (page) => {
        localStorage.setItem("selectedPage", page);
        navigate(page);
      };

  return (
    <div>
      <Text>Why choose us?</Text>
      <div>
        <Block>
          <Box>
            Our sites are not just a pretty picture, but a full-fledged sales
            channel that constantly brings new customers
            <ButtonOrder />
          </Box>
          <Box>
            Together with the site, you get a ready-made foundation for
            promotion on the Internet thanks to SEO and analytics
            <ButtonOrder />
          </Box>
          <Box>
            You order a complete product, because we take care of all stages of
            work - from the analysis of your business to the launch of a
            ready-made website
            <ButtonOrder />
          </Box>
          <Box>
            Cooperation with us is not only standard development, but also the
            discussion of dozens of new ideas for the development of your
            business
            <ButtonOrder />
          </Box>
          <Box>
            For us, there are no former clients, therefore, once you order a
            site from us, you get my support forever
            <ButtonOrder />
          </Box>
          <Box>
            We do not use designers (Redymag, Webflow, etc.), because I create
            only high-quality sites
            <ButtonOrder />
          </Box>
        </Block>
        <Services>
          <BoxLink>
            <li>
              <Link to="page" onClick={() => handlePageLinkClick("page")}>LandingPage</Link>
            </li>
            <li>
              <Link to="site" onClick={() => handlePageLinkClick("site")}>Multi-page site</Link>
            </li>
            <li>
              <Link to="shop" onClick={() => handlePageLinkClick("shop")}>Internet-shop</Link>
            </li>
            <li>
              <Link to="audit" onClick={() => handlePageLinkClick("audit")}>Site audit</Link>
            </li>
            <li>
              <Link to="consultation" onClick={() => handlePageLinkClick("consultation")}>Individual consultation</Link>
            </li>
          </BoxLink>
          <Outlet />
        </Services>
      </div>
      <FAQ/>
      <OurProject/>
    </div>
  );
};

export default Order;
