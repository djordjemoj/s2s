import React from "react";
import "../Landing2/Landing2.css";
import S2SLOGO from "../../assets/s2slogo.png";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
// import Pozadina from "../../assets/pozadinaFinal.png";


const Landing2 = () => {
  return (
    <div className="Ceo-Landing">
      {/* <motion.div
        className="divPozadina"
        style={{ width: "100%" }}
        initial={{ background: null }}
        animate={{
          backgroundColor: ["rgb(33, 96, 138, 1) ", "rgb(33, 96, 138, 0) "],
          background: Pozadina,
        }}
        transition={{
          type: "ease[1, 0.1, 0.8, 0.67]",
          // stiffness: 500,
          // mass: 0.3,
          // damping: 20,

          delay: 0.9,
        }}
      ></motion.div> */}
      {/* <a name="top"></a> */}
      <div className="Landing-container">
        <div className="Text-animacija-placeholder">
          <motion.div
            className="text-animacija"
            animate={{ scale: [1, 0.3, 1] }}
            transition={{ times: [0.1, 0.9, 1], delay: 0.5 }}
          >
            <p>
              WHERE <span id="learning">LEARNING</span> BEGINS!
            </p>
          </motion.div>
        </div>
        <div className="Logo-placeholder">
          <motion.div
            className="img-mainLogo"
            initial={{ x: "1500px", y: "-3000px" }}
            animate={{ x: "-1%", y: "0%" }}
            // exit={{ opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 500,
              mass: 0.3,
              damping: 20,

              delay: 1.3,
            }}
          >
            <img className="Logo-Koji-Ulazi" src={S2SLOGO} alt="" />
            {/* <LazyLoadImage
              src={S2SLOGO} alt='s2s'
              className="prijLogo"
              effect="blur"
              placeholderSrc={S2SLOGO}
              >

              </LazyLoadImage> */}
          </motion.div>
        </div>

        <motion.div
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
          {/* onClick={() => navigate('/prijava')} */}
        </motion.div>
        <div className="empty-gradient"></div>
      </div>

      {/* <motion.div
        className="first-page text-center"
        // style={{
        //   backgroundImage: `url(${Background})`
        // }}
      >
        
        <div className="row-landing">
          <div className="col-md-12 col-sm-12">
            <motion.div
              className="text-animacija"
              animate={{ scale: [1, 0.3, 1] }}
              transition={{ times: [0.1, 0.9, 1], delay: 0 }}
            >
              <p>
                WHERE <span id="learning">LEARNING</span> BEGINS!
              </p>
            </motion.div>
          </div>
        </div>
        <div className="logo-container-for-animation">
          <motion.div
            className="img-mainLogo"
            initial={{ x: "1500px", y: "-3000px" }}
            animate={{ x: "0%", y: "0%" }}
            // exit={{ opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 500,
              mass: 0.3,
              damping: 20,

              delay: 0.8,
            }}
          >
            <img className="Logo-Koji-Ulazi" src="logo3.png" alt="" />
          </motion.div>
        </div>

        <motion.div
          className="dugme-Prijavise"
          whileHover={{ scale: 1.2 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        >
          <HashLink to="/prijava">
            <button type="button" class="dugmeZaPrijavu">
              PRIJAVI SE
            </button>
          </HashLink>
           onClick={() => navigate('/prijava')}
        </motion.div>
      </motion.div> */}
    </div>
  );
};

export default Landing2;
