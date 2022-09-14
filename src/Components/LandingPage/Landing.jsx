import React from "react";
import "../LandingPage/Landing.css";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

//rafce

const landing = () => {
  return (
    <div>
      <div className="container first-page text-center">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="text">
              <p>
                WHERE <span id="learning">LEARNING</span> BEGINS!
              </p>
            </div>
          </div>
        </div>
        <div className="logo-container-for-animation">
          <motion.div
            className="img-mainLogo"
            initial={{ x: "200%", y: "-500%" }}
            animate={{ x: "0%", y: "0%" }}
            // exit={{ opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 500,
              mass: 0.3,
              damping: 22,
              delay: "0.05",
            }}
          >
            <img className="responsive" src="logo3.png" alt="" />
          </motion.div>
        </div>
        <div className="dugme-sve">
          <div className="dugme">
            <button type="button" class="dugmeZaPrijavu">
              PRIJAVI SE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default landing;
