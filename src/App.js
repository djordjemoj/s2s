import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./Components/Loader/Loader";
import "./App.css";

// const Prijava = lazy(() => import("./Components/Prijava/Prijava"));
const Home = lazy(() => import("./Home"));

function App() {
  return (
    <div className="App">
      
        <Suspense fallback={<Loader />}>
          <Routes>
            {/* <Route path="/prijava" exact element={<Prijava />} /> */}
            <Route path="/" exact element={<Home />} />
          </Routes>
        </Suspense>
    </div>
  );
}

export default App;
