import "./App.css";
import LandingPage from "./Components/LandingPage/Landing";
import AboutFonis from "./Components/AboutFonis/AboutFonis";
import Hexagon from "./Components/HexagonOpsti/Hexagon";
import Radionice from "./Components/Radionice/Radionice";
import Agenda from "./Components/Agenda/Agenda";
import OrgTim3 from "./Components/OrgTim3/OrgTim3";
import "./fonts/Jost500Medium.otf";
import "./fonts/Jost700Bold.otf";
import Panelisti from "./Components/Panelisti/Panelisti";
import Footer from "./Components/Footer/Footer";
import Partneri from "./Components/Partneri/Partneri";

function App() {
  return (
    <>
      <LandingPage />
      <AboutFonis />
      <Panelisti />
      <Agenda />
      <Partneri />
      <OrgTim3 />
      <Footer />
    </>
  );
}

export default App;
