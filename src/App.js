import "./App.css";
import Hexagon from "./Components/HexagonOpsti/Hexagon";
import Radionice from "./Components/Radionice/Radionice";
import Panda from "./assets/Panda_closeup.jpg";

function App() {
  return (
    <>
      <Radionice />
      <Radionice />
      <Hexagon
        style={{ stroke: "#42203f" }}
        href="https://fonis.rs"
        backgroundImage={Panda}
        diagonal={3}
        flatTop={true}
        className = "HexProba"
      />
      <Radionice />
    </>
  );
}

export default App;
