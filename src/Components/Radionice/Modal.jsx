import React from "react";
import { Scrollbars } from "react-custom-scrollbars-2";

const Modal = ({ open, onClose, modali }) => {
  if (!open) return null;

  let slika2;
  if (modali.slikaPredavaca2 === null) {
    slika2 = <span></span>;
  } else {
    slika2 = <img src={modali.slikaPredavaca2} alt="Predavac na s2s" />;
  }

  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <div className="modalRight">
          <p className="closeBtn" onClick={onClose}>
            X
          </p>
          <div className="content">
            <h1>{modali.naslov}</h1>
            <div className="probaDiv-first"><p className="prviTekst">{modali.prviTekst}</p></div>
            <div className="info">
              <svg
                width="586"
                height="156"
                viewBox="0 0 586 156"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M583.626 154.15L101.302 154.15L2.45471 79.9539L101.324 1.5002L583.626 1.5002V154.15Z"
                  fill="#F9EEE1"
                  stroke="black"
                  stroke-width="3"
                />
                <switch>
            <foreignObject
              x="20%"
              y="15%"
              width="450"
              height="1000"
              fontSize="22px"
            >
              <p
                style={{
                  color: "#0C5073",
                  // marginLeft: "0%",
                  
                  textAlign: "center",
                  
                }}
              >
                {modali.nivo} <br />
                {modali.predznanje} <br />
                {modali.potrebanSoft} <br />{" "}
                {" "}
                {/* <br></br>
                NAŠ SAJT: <br /> */}
               
              </p>
              
            </foreignObject>
          </switch>
                
              </svg>
            </div>
            

            <h3>{modali.predavac}</h3>
            <div className="probaDiv">
            <div className="slike-proba"><img src={modali.slikaPredavaca1} alt="Predavac na s2s"/>
          {slika2}
          </div>
            <p className="DrugiTekst" style={{
            
            overflowY: 'auto',
              maxHeight: '170px',
            cursor: "pointer",
            
          }}>{modali.drugiTekst}</p>
            </div>
          </div>
          {/* <img src={modali.slikaPredavaca1} alt="Predavac na s2s"/>
          {slika2} */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
