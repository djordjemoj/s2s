import React from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Laptop from "../../assets/laptop.png";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

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
          <div className="closeBtn" onClick={onClose}>
            X
          </div>

          <div className="content">
            {modali.laptop && <img className="lapsitopsi" src={Laptop}></img>}
            <h1>{modali.naslov}</h1>
            <div className="probaDiv-first">
              <p className="prviTekst">{modali.prviTekst}</p>
            </div>

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
                    x="17%"
                    y="14%"
                    width="450"
                    height="1000"
                    fontSize="24px"
                  >
                    <p
                      style={{
                        color: "#0C5073",
                        // marginLeft: "0%",

                        textAlign: "left",
                      }}
                    >
                      {modali.nivo} <br />
                      {modali.predznanje} <br />
                      {modali.potrebanSoft} <br />{" "}
                      {/* <br></br>
                NAŠ SAJT: <br /> */}
                    </p>
                  </foreignObject>
                </switch>
              </svg>
            </div>

            <h3>{modali.predavac}</h3>
            <div className="probaDiv">
              <div className="slike-proba">
                {slika2}

                <img src={modali.slikaPredavaca1} alt="Predavac na s2s" />
              </div>

              <p
                className="DrugiTekst"
                style={{
                  // overflowY: "auto",
                  // maxHeight: '330px',
                  cursor: "pointer",
                }}
              >
                {modali.drugiTekst}
              </p>
            </div>
            {/* <motion.div
          className="dugme-Prijavise"
          whileHover={{ scale: 1.2 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        >
          <HashLink to="/prijava" class="dugmeZaPrijavu-hashlink">
            <button type="button" class="dugmeZaPrijavu">
              PRIJAVI SE
            </button>
          </HashLink>
        </motion.div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
