import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Prijava from "./Components/Prijava/Prijava";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/prijava" exact element={<Prijava />} />
        <Route path="/" exact element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
