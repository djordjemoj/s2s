import "./App.css";
import Hexagon from "./Components/HexagonOpsti/Hexagon";
import Radionice from "./Components/Radionice/Radionice";
import Panda from "./assets/Panda_closeup.jpg";
import Agenda from "./Components/Agenda/Agenda";
import LandingPage from "./Components/LandingPage/Landing";

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
    </>
  );
}

export default App;
