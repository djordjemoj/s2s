import React from "react";
import "../LandingPage/Landing.css";
import { motion } from "framer-motion";
// import { useNavigate } from 'react-router';
import Background from "../../assets/pozadina.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashLink } from "react-router-hash-link";

//rafce

const landing = () => {
  // const navigate = useNavigate();
  return (
    <div className="Ceo-Landing" >
      <motion.div
        className="first-page text-center"
        // style={{
        //   backgroundImage: `url(${Background})`
        // }}
      >
        {/* background-image: url("../../assets/pozadina.png");
    background-repeat: repeat; */}
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <motion.div
              className="text-animacija"
              // initial={{ opacity: 0 }}
              // animate={{ opacity: 1 }}
              // transition={{ duration: 0.5, delay: 0.7, ease: "anticipate" }}
              animate={{ scale: [1, 0.5, 1] }}
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
            animate={{ x: "0%", y: "0%"}}
            // exit={{ opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 500,
              mass: 0.3,
              damping: 20,

              delay: 0.7,
            }}
          >
            <img className="responsive" src="logo3.png" alt="" />
          </motion.div>
        </div>
        <div className="dugme-sve">
          <div className="dugme">
            <HashLink to="/prijava">
              <button type="button" class="dugmeZaPrijavu">
                PRIJAVI SE
              </button>
            </HashLink>
            {/* onClick={() => navigate('/prijava')} */}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default landing;
