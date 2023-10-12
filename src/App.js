import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Order from "./pages/Order/Order";
import LandingPage from "./components/LandingPage/LandingPage";
import SiteAudit from "./components/SiteAudit/SiteAudit";
import InternetShop from "./components/InternetShop/InternetShop";
import MultiPage from "./components/MultiPage/MultiPage";
import Consultation from "./components/Consultation/Consultation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="order" element={<Order />}>
          <Route path="page" element={<LandingPage />} />
          <Route path="site" element={<MultiPage />} />
          <Route path="shop" element={<InternetShop />} />
          <Route path="audit" element={<SiteAudit />} />
          <Route path="consultation" element={<Consultation />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
