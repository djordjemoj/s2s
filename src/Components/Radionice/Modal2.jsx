import React, { useState } from "react";
import { motion } from "framer-motion";
import Laptop from "../../assets/laptop.png";
import classes from "../Radionice/Modal2.module.css";
import {
  LazyLoadImage,
} from "react-lazy-load-image-component";
// import { MotionConfig } from "framer-motion";
const Modal2 = ({ open, onClose, modali }) => {
  if (!open) return null;

  let predavac2;
  if (modali.slikaPredavaca2 === null) {
    predavac2 = <span></span>;
  } else {
    predavac2 = (
      <div className="probaDiv">
        <div className="slike-proba">
          {/* <div></div> */}
          <LazyLoadImage src={modali.slikaPredavaca2} alt="Predavac na s2s" ></LazyLoadImage>
          {/* <img src={modali.slikaPredavaca2} alt="Predavac na s2s"></img> */}
        </div>

        <div className="DrugiTekst">
          <h4>{modali.drugiTekst2}</h4>
        </div>
      </div>
    );
  }

  return (
    <div onClick={onClose} className="overlay">
      <motion.div
    initial={{opacity: 0.35, filter: "brightness(35%)", height: "0"}}
    animate={{opacity: 1, filter: "brightness(100%)", height: "auto"}}
    transition={{ duration: .4, ease:"easeOut" }}

        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <div
          className={classes.modalTop}
          style={{ paddingRight: modali.laptop ? "45px" : "none" }}
        >
          {/* ovde ce biti lapotp, naslov i close btn , obrati paznju da uvek ostane dobar rasp cak i bez laptopa
pa zato mozda nece moci flex*/}
          {/* <div className={classes.deoZaLaptop}> */}
          {modali.laptop && (
            <img className={classes.praviLapTop} src={Laptop} alt="laptop je obavezan"></img>

          )}

          <div className={classes.naslovModala2}>
            <h1 className={classes.naslovModala2H1}>{modali.naslov}</h1>
          </div>

          <div className="closeBtn" onClick={onClose}>
            X
          </div>
        </div>
        <div className="modalRight">
          {/* <div className={classes.closeBtn} onClick={onClose}>X</div> */}

          <div className="content">
            <div className="probaDiv-first">
              <h4 className="prviTekst">{modali.prviTekst}</h4>
            </div>

            <div className="info2">
              <div className="infoKocka">
                <p>
                  <span className="potrebanNivoText">{modali.nivo}</span> <br />
                  {modali.predznanje} <br />
                  {modali.potrebanSoft} <br />{" "}
                </p>
              </div>
            </div>

            <h2 className={classes.naslovPredavaci}>{modali.predavac}</h2>

            <div className="probaDiv">
              <div className="slike-proba">
                {/* <img src={modali.slikaPredavaca1} alt="Predavac na s2s" /> */}
          <LazyLoadImage src={modali.slikaPredavaca1} alt="Predavac na s2s" ></LazyLoadImage>

              </div>

              <div className="DrugiTekst">
                <h4>{modali.drugiTekst}</h4>
              </div>
            </div>
            {predavac2}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Modal2;
