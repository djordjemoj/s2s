import "./App.css";
import LandingPage from "./Components/LandingPage/Landing";
import Hexagon from "./Components/HexagonOpsti/Hexagon";
import Radionice from "./Components/Radionice/Radionice";
import Agenda from "./Components/Agenda/Agenda";
import OrgTim3 from "./Components/OrgTim3/OrgTim3";
import "./fonts/Jost500Medium.otf";
import "./fonts/Jost700Bold.otf";


function App() {
  return (
    <>
      <LandingPage />
      <Radionice />
      {/* <Radionice />
      <Hexagon
        style={{ stroke: "#42203f" }}
        href="https://fonis.rs"
        backgroundImage={Panda}
        diagonal={3}
        flatTop={true}
        className = "HexProba"
      />
      <Radionice /> */}

      <Agenda />
      {/* <Orgtim /> */}
      <OrgTim3 />
      {/* <OrgTim3 /> */}
    </>
  );
}

export default App;

