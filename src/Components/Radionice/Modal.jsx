import React from 'react';
import Boris from "../../assets/Boris.png"  


const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'>
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          <div className='content'>
            <h1>Into to C</h1>
            <p className='prviTekst'>Ukoliko ste novi u svetu programiranja, ono što vam je potrebno je jezik koji pruža odličnu osnovu za dalje usavršavanje. Veoma jednostavan za učenje, C već skoro pedeset godina važi za jedan od najbitnijih programskih jezika. Ovaj programski jezik opšte namene se još uvek uspešno koristi za pisanje programa u različitim oblastima, te su tako kompajleri, biblioteke i interpreteri drugih programskih jezika napisani upravo C programskim jezikom. Izađite iz zone komfora i priključite se Intro to C radionici, jer je programiranje upravo takvo – svaki problem je rešiv, ali isto tako i jedinstven i treba mu prići na takav način.</p>
            <div className='info'>
              <svg width="586" height="156" viewBox="0 0 586 156" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M583.626 154.15L101.302 154.15L2.45471 79.9539L101.324 1.5002L583.626 1.5002V154.15Z" fill="#F9EEE1" stroke="black" stroke-width="3"/>
                <text x="250" y="45" font-size="22" fill="#0C5073">Nivo: Osnovni</text>
                <text x="150" y="85" font-size="22" fill="#0C5073">Potrebno predznanje: Nije potrebno</text>
                <text x="175" y="125" font-size="22" fill="#0C5073">Potreban softver: Visual studio</text>
              </svg>
            </div>
            <h3>Predavač: Stefan Jovanović</h3>
            <p className='DrugiTekst'>Druga sam godina FON-a, smer Informacioni sistemi i tehnologije. Programiranjem se bavim još od osnovne škole, primarno Game Development-om i Fullstack Web Development-om. Sa C-om sam se upoznao u srednjoj školi gde sam kroz sve četiri godine učio C i C++ u svrhe takmičenja iz programiranja. Svoje znanje iz C-a dodatno sam upotpunio na prvoj godini studija na predmetu Programiranje 1 i želja mi je da ovom radionicom to upotpunjeno znanje prenesem drugima.</p>
          </div>
          <img src={Boris} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Modal;