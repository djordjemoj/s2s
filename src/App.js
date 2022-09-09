import "./App.css";
import Hexagon from "./Components/HexagonOpsti/Hexagon";
import Radionice from "./Components/Radionice/Radionice";
import LandingPage from "./Components/LandingPage/Landing";
import Orgtim from "./Components/Orgtim/Orgtim";

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

      <Orgtim />
    </>
  );
}

export default App;
