import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
// import Prijava from "./Components/Prijava/Prijava";

const Prijava = lazy(() => import("./Components/Prijava/Prijava"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Učitavanje...</div>}>
        <Routes>
          <Route path="/prijava" exact element={<Prijava />} />
          <Route path="/" exact element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
