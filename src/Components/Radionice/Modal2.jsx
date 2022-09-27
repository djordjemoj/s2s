import React from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Laptop from "../../assets/laptop.png";
import classes from "../Radionice/Modal2.module.css";

const Modal2 = ({ open, onClose, modali }) => {
  if (!open) return null;

  let predavac2;
  if (modali.slikaPredavaca2 === null) {
    predavac2 = <span></span>;
  } else {
    predavac2 = <div className="probaDiv">
    <div className="slike-proba">
      
        
      <img src={modali.slikaPredavaca2} alt="Predavac na s2s" />
      
    </div>

    <div
      className="DrugiTekst"
    >
      <p>{modali.drugiTekst2}</p>
    </div>
  </div>;
  }
   


  return (
    <div onClick={onClose} className="overlay">
      <div
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
            <img className={classes.praviLapTop} src={Laptop}></img>
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
              <p className="prviTekst">{modali.prviTekst}</p>
            </div>

            <div className="info2">
                <div className="infoKocka">
             <p>
                      {modali.nivo} <br />
                      {modali.predznanje} <br />
                      {modali.potrebanSoft} <br />{" "}
                    </p></div>
              
            </div>

            <h2 className={classes.naslovPredavaci}>{modali.predavac}</h2>
            
            <div className="probaDiv">
              <div className="slike-proba">
                

                <img src={modali.slikaPredavaca1} alt="Predavac na s2s" />
              </div>

              <div
                className="DrugiTekst"
              >
                <p>{modali.drugiTekst}</p>
              </div>
            </div>
            {predavac2}
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal2;
