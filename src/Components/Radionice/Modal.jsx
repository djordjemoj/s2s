import React from "react";

const Modal = ({ open, onClose, modali }) => {
  if (!open) return null;
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
            <p className="prviTekst">{modali.prviTekst}</p>
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
                <text x="250" y="45" font-size="22" fill="#0C5073">
                  {modali.nivo}
                </text>
                <text x="150" y="85" font-size="22" fill="#0C5073">
                  {modali.predznanje}
                </text>
                <text x="175" y="125" font-size="22" fill="#0C5073">
                  {modali.potrebanSoft}
                </text>
              </svg>
            </div>
            <h3>{modali.predavac}</h3>
            <p className="DrugiTekst">{modali.drugiTekst}</p>
          </div>
          <img src={modali.slikaPredavaca1} alt="Predavac na s2s" />
          <img src={modali.slikaPredavaca2} alt="Predavac na s2s" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
