import NavBar from "./Components/NavBar/NavBar";
import LandingPage from "./Components/LandingPage/Landing";
import AboutFonis from "./Components/AboutFonis/AboutFonis";
import Hexagon from "./Components/HexagonOpsti/Hexagon";
import Radionice from "./Components/Radionice/Radionice";
import Agenda from "./Components/Agenda/Agenda";
import Faq from "./Components/Faq/Faq";
import OrgTim3 from "./Components/OrgTim3/OrgTim3";
import Panelisti from "./Components/Panelisti/Panelisti";
import Footer from "./Components/Footer/Footer";
import Partneri from "./Components/Partneri/Partneri";
import "./fonts/Jost500Medium.otf";
import "./fonts/Jost700Bold.otf";

const Home = () => {
  return (
    <>
      <NavBar />
      <LandingPage />
      <AboutFonis />
      <Panelisti />
      <Agenda />
      <Faq />
      <Partneri />
      <OrgTim3 />
      <Footer />
    </>
  );
};

export default Home;
