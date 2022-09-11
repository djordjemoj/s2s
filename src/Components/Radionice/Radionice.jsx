import React from "react";
import "../Radionice/Radionice.css";

function obavestenje() {
  alert("Hello! I am an alert box!!");
}

const Radionice = () => {
  return (
    <div>
      <div class="Hexbuttons">
        <div class="Hexr">
          <div class="Hexagon">
            <span title="account"></span>
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
