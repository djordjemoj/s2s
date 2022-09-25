import React, { useState } from 'react';
import "../Radionice/Radionice.css";
import csharp from "../../assets/radionicaCS.png"  
import after from "../../assets/radioniceAe.png"
import figma from "../../assets/radioniceFigma.png"
import javaSlika from "../../assets/radioniceJava.png"
import python from "../../assets/radionicePython.png"
import reactSlika from "../../assets/radioniceReact.png"
import seoSlika from "../../assets/radioniceSeo.png"
import unity from "../../assets/radioniceUnity.png"
import nodeSlika from "../../assets/radioniceNode.png"
import agile from "../../assets/radioniceAgile.png"
import Modal from './Modal';
import "../Radionice/Modal.css"

// function obavestenje() {
//   alert("Hello! I am an alert box!!");
// }

const Radionice = () => {
  const [openModal, setOpenModal] = useState(false);
  return (    
    <div id = "radionice">
      <div className='prviZnak'>
      </div>
      <Modal  
              open={openModal} 
              onClose={() => setOpenModal(false)} />
      <div className="page">
        <div className="container">
          <div className="hexagonArea first">
            <div className="hexagon">
              <h2 className="radionicaNaziv">ASP.NET</h2>
              <div className="blanket"></div>
                <img src={csharp} alt="" />
                <button className="popupButton" onClick={() => setOpenModal(true)}>Saznaj više</button>
            </div>
            <div className="hexagon">
              <h2 className="radionicaNaziv">After Effects</h2>
              <div className="blanket"></div>
                <img src={after} alt="" />
                <button className="popupButton" onClick={() => setOpenModal(true)}>Saznaj više</button>
            </div>
            <div className="hexagon">
              <h2 className="radionicaNaziv">Agile</h2>
              <div className="blanket"></div>
                <img src={agile} alt="" />
                <button className="popupButton" onClick={() => setOpenModal(true)}>Saznaj više</button>
            </div>
          </div>
          <div className="hexagonArea second">
          <div className="hexagon">
              <h2 className="radionicaNaziv">Figma</h2>
              <div className="blanket"></div>
                <img src={figma} alt="" />
                <button className="popupButton" onClick={() => setOpenModal(true)}>Saznaj više</button>
            </div>
            <div className="hexagon">
              <h2 className="radionicaNaziv">Java</h2>
              <div className="blanket"></div>
                <img src={javaSlika} alt="" />
                <button className="popupButton" onClick={() => setOpenModal(true)}>Saznaj više</button>
            </div>
          </div>
          <div className="hexagonArea first">
            <div className="hexagon">
              <h2 className="radionicaNaziv">Node.js</h2>
              <div className="blanket"></div>
                <img src={nodeSlika} alt="" />
                <button className="popupButton" onClick={() => setOpenModal(true)}>Saznaj više</button>
            </div>
            <div className="hexagon">
              <h2 className="radionicaNaziv">Python</h2>
              <div className="blanket"></div>
                <img src={python} alt="" />
                <button className="popupButton" onClick={() => setOpenModal(true)}>Saznaj više</button>
            </div>
            <div className="hexagon">
              <h2 className="radionicaNaziv">React</h2>
              <div className="blanket"></div>
                <img src={reactSlika} alt="" />
                <button className="popupButton" onClick={() => setOpenModal(true)}>Saznaj više</button>
            </div>
          </div>
          <div className="hexagonArea second">
            <div className="hexagon">
              <h2 className="radionicaNaziv">SEO</h2>
              <div className="blanket"></div>
                <img src={seoSlika} alt="" />
                <button className="popupButton" onClick={() => setOpenModal(true)}>Saznaj više</button>
            </div>
            <div className="hexagon">
              <h2 className="radionicaNaziv">Unity</h2>
              <div className="blanket"></div>
                <img src={unity} alt="" />
                <button className="popupButton" onClick={() => setOpenModal(true)}>Saznaj više</button>
            </div>
          </div>
        </div>
      </div>
      <div className="radioniceDivider">
      </div>
    </div>
  );
};

export default Radionice;
