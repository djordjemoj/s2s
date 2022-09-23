import Landing2 from "./Components/Landing2/Landing2";
import { Scrollbars } from 'react-custom-scrollbars-2';
import AboutFonis from "./Components/AboutFonis/AboutFonis";
import Hexagon from "./Components/HexagonOpsti/Hexagon";
import Radionice from "./Components/Radionice/Radionice";
import Agenda from "./Components/Agenda/Agenda";
import Faq from "./Components/Faq/Faq";
import OrgTim3 from "./Components/OrgTim3/OrgTim3";
import Panelisti from "./Components/Panelisti/Panelisti";
import Footer from "./Components/Footer/Footer";
import Partneri from "./Components/Partneri/Partneri";
import Navbar2 from "./Components/Navbar2/Navbar2";


const Home = () => {
  return (
    <>
      <Scrollbars
                style={{ height: "100vh" }}>
      <Navbar2 />
      <Landing2 />
      <AboutFonis />
      <Panelisti />
      {/* <Radionice /> */}
      <Agenda />
      <Faq />
      <Partneri />
      <OrgTim3 />
      <Footer />
      </Scrollbars>
    </>
  );
};

export default Home;
