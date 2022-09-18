import React from 'react';
// import nft from './nft.jpg';

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          <div className='content'>
            <h1>Into to C</h1>
            <p>Ukoliko ste novi u svetu programiranja, ono što vam je potrebno je jezik koji pruža odličnu osnovu za dalje usavršavanje. Veoma jednostavan za učenje, C već skoro pedeset godina važi za jedan od najbitnijih programskih jezika. Ovaj programski jezik opšte namene se još uvek uspešno koristi za pisanje programa u različitim oblastima, te su tako kompajleri, biblioteke i interpreteri drugih programskih jezika napisani upravo C programskim jezikom. Izađite iz zone komfora i priključite se Intro to C radionici, jer je programiranje upravo takvo – svaki problem je rešiv, ali isto tako i jedinstven i treba mu prići na takav način.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;