import React from "react";
import "../Radionice/Radionice.css";
import csharp from "../../assets/csharp.png";

function obavestenje() {
  alert("Hello! I am an alert box!!");
}

const Radionice = () => {
  return (
    <div id="radionice">
      <svg className="radioniceZnak" viewBox="0 0 1398 374" fill="none">
        <path
          d="M211.639 263.247L13.4181 364.738C8.42747 367.294 2.5 363.669 2.5 358.063L2.5 10C2.5 5.8579 5.85786 2.50003 10 2.50003L618.917 2.50003C621.258 2.50003 623.464 3.5931 624.883 5.45534L656.082 46.4131L658.071 44.8982L656.082 46.4132C658.455 49.5285 662.193 51.3387 666.08 51.3387H968.893C972.753 51.3387 976.476 49.5532 978.852 46.4708L1010.5 5.42075C1011.92 3.57893 1014.11 2.50003 1016.44 2.50003L1387.99 2.5C1392.14 2.5 1395.49 5.85787 1395.49 10V357.325C1395.49 363.06 1389.32 366.673 1384.32 363.863L1206.72 264.032C1204.85 262.981 1202.74 262.429 1200.59 262.429H1164.95C1162.98 262.429 1161.03 262.897 1159.27 263.795L951.41 369.871C949.268 370.964 946.733 370.964 944.591 369.871L736.742 263.796C734.981 262.897 733.032 262.429 731.056 262.43L693.3 262.443C691.312 262.444 689.353 262.919 687.585 263.828L481.485 369.88C479.364 370.971 476.851 370.989 474.715 369.927L261.033 263.717C259.357 262.885 257.516 262.439 255.645 262.412L217.512 261.875C215.472 261.846 213.455 262.317 211.639 263.247Z"
          fill="#F99D1D"
          stroke="black"
          strokeWidth="5"
        />
        <text
          fontFamily=""
          fontSize="40"
          text-anchor="middle"
          x="50%"
          y="45%"
          dominant-baseline="middle"
          fill="#ffffff"
        >
          <tspan>RADIONICE</tspan>
        </text>
      </svg>
      <div class="Hexbuttons">
        <div class="Hexr">
          <div class="Hexagon">
            <img className="Thumbnail" src={csharp} alt="C#" />
            <span title="account"></span>
            <button className="button">Saznaj Vise</button>
          </div>
          <div class="Hexagon" onClick={obavestenje}>
            <span title="navigation"></span>
          </div>
          <div class="Hexagon">
            <span title="theme"></span>
          </div>
        </div>
        <div class="Hexr">
          <div class="Hexagon">
            <span title="about us"></span>
          </div>
          <div class="Hexagon">
            <span title="placeholder"></span>
          </div>
        </div>
        <div class="Hexr">
          <div class="Hexagon">
            <span title="favorites"></span>
          </div>
          <div class="Hexagon">
            <span title="new post"></span>
          </div>
          <div class="Hexagon">
            <span title="liked"></span>
          </div>
        </div>
        <div class="Hexr">
          <div class="Hexagon">
            <span title="about us"></span>
          </div>
          <div class="Hexagon">
            <span title="placeholder"></span>
          </div>
        </div>
        <div class="Hexr">
          <div class="Hexagon">
            <span title="favorites"></span>
          </div>
          <div class="Hexagon">
            <span title="new post"></span>
          </div>
          <div class="Hexagon">
            <span title="liked"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Radionice;
