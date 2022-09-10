import "./App.css";
import Hexagon from "./Components/HexagonOpsti/Hexagon";
import Radionice from "./Components/Radionice/Radionice";

import Agenda from "./Components/Agenda/Agenda";
import LandingPage from "./Components/LandingPage/Landing";
import Orgtim from "./Components/Orgtim/Orgtim";
import Orgtim2 from "./Components/Orgtim2/Orgtim2";

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
      <Orgtim />
      <Orgtim2 />
    </>
  );
}

export default App;
