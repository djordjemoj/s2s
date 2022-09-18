import React, { useEffect, useState } from "react";
import classes from "./Faq.module.css";
import { motion } from "framer-motion";
import LOGO from "../../assets/s2slogo.png";

const FaqItem = (props) => {
  const [visibleAnswer, setVisibleAnswer] = useState(false);

  return (
    <>
      <div
        className={classes.FaqItem}
        onClick={() => setVisibleAnswer(!visibleAnswer)}
        style={{ cursor: "pointer", WebkitTapHighlightColor: "rgba(0,0,0,0)" }}
      >
        <motion.div
          animate={{
            opacity: visibleAnswer ? 0 : 1,
            // scale: visibleAnswer ? 0 : 1,
            height: visibleAnswer ? "0rem" : "auto",
          }}
          //   OVO sam
          initial={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          style={{ cursor: "pointer", fontSize: "30px" }}
          className={classes.Question}
        >
          <div className={classes.baseMaliHex}>
            <svg className={classes.faqMaliHex} fill="none" viewBox="0 0 120 105">
              <path
                d="M90.9745 92.0013L109.138 60.707C112.463 54.9776 112.471 47.9074 109.159 42.1703L91.2306 11.1172C87.9184 5.38022 81.7914 1.85212 75.1668 1.86729L38.9834 1.95011C32.4042 1.96516 26.3281 5.47323 23.0255 11.1634L4.86203 42.4578C1.53664 48.1872 1.52855 55.2574 4.84082 60.9944L22.7693 92.0475C26.0816 97.7845 32.2086 101.313 38.8331 101.297L75.0166 101.215C81.5957 101.2 87.6719 97.6915 90.9745 92.0013Z"
                fill="#F9EEE1"
                stroke="black"
                stroke-width="3"
              />
              <text
                  x="49%"
                  y="56%"
                  fill="black"
                  textAnchor="middle"
                  fontWeight="650"
                  dominant-baseline="middle"
                  fontSize="250%"
                >
                ?
                </text>
            </svg>
            {/* <div className = {classes.slicicaUpitnik}>?</div> */}
          </div>
          <svg
            // className="base"
            className={classes.basePitanje}
            width="1045"
            height="85"
            viewBox="0 0 1045 69"
            // fill="none"
          >
            <path
              d="M2.81255 15.1993C-0.413203 9.53279 3.67915 2.49417 10.1995 2.49417L1035 2.49423C1039.69 2.49423 1043.5 6.29981 1043.5 10.9942L1043.5 38.4942L1043.5 65.9941C1043.5 70.6885 1039.69 74.4941 1035 74.4941L10.1996 74.4941C3.67923 74.494 -0.413131 67.4554 2.81262 61.7889L12.8348 44.1835C14.8427 40.6563 14.8427 36.332 12.8348 32.8049L2.81255 15.1993Z"
              fill="#F9EEE1"
              stroke="black"
              stroke-width="3"
            />
            <switch>
              <foreignObject
                className={classes.PravaVelicinaTeksta}
                x="5%"
                y="18%" //ovde sam promenila, bilo je 20
                // fontSize="1rem"
                style={{ width: "100%", height: "100%" }}
              >
                {props.question}
              </foreignObject>
            </switch>
          </svg>
        </motion.div>

        <motion.div
        className={classes.Answer}
          animate={{
            height: visibleAnswer ? "auto" : "0rem",
            opacity: visibleAnswer ? 1 : 0,
          }}
          
          initial={{ height: "0rem", opacity: 0 }}
          //   OVO isto

          transition={{ duration: 1 }} //za gore
          style={{
            overflow: "hidden",

            cursor: "pointer",
            WebkitTapHighlightColor: "rgba(0,0,0,0)", //ovo mu nista ne znaci
          }}
        >
          {/* <svg
            className={classes.base}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 76 68"
            fill="none"
          >
            <path
              d="M50.9618 65.4932C53.8701 65.4318 56.545 63.8874 58.0524 61.3994L72.388 37.7369C73.9948 35.0847 74.0298 31.768 72.4793 29.0825L59.5743 6.73048C58.0239 4.04499 55.134 2.41694 52.0338 2.48237L24.3736 3.06612C21.4653 3.12751 18.7904 4.67188 17.2831 7.15986L2.94744 30.8224C1.34065 33.4745 1.30566 36.7913 2.85613 39.4767L15.7611 61.8288C17.3116 64.5143 20.2014 66.1423 23.3017 66.0769L50.9618 65.4932Z"
              fill="#F9EEE1"
              stroke="black"
              stroke-width="3"
            />
          </svg> */}
          <div className={classes.base}>
            <svg className={classes.faqVelikiHex} fill="none" viewBox="-5 -13 120 120">
              <path
                d="M90.9745 92.0013L109.138 60.707C112.463 54.9776 112.471 47.9074 109.159 42.1703L91.2306 11.1172C87.9184 5.38022 81.7914 1.85212 75.1668 1.86729L38.9834 1.95011C32.4042 1.96516 26.3281 5.47323 23.0255 11.1634L4.86203 42.4578C1.53664 48.1872 1.52855 55.2574 4.84082 60.9944L22.7693 92.0475C26.0816 97.7845 32.2086 101.313 38.8331 101.297L75.0166 101.215C81.5957 101.2 87.6719 97.6915 90.9745 92.0013Z"
                fill="#F9EEE1"
                stroke="black"
                stroke-width="3"
              />
            </svg>
            <img className={classes.slicicaLogo}  src={LOGO} alt="LOGO" />
          </div>
          
          
          {/* </motion.div> */}

          {/* <motion.div
          animate={{
            height: visibleAnswer ? "auto" : "0rem",
            opacity: visibleAnswer ? 1 : 0,
            scale: visibleAnswer ? 1 : 0,
          }}
          initial={{ height: "0rem", opacity: 0, scale: 0 }}
          //   OVO isto

          transition={{ duration: 1 }} //za gore
          style={{
            overflow: "hidden",
            color: "black",
            fontSize: "25px",
            lineHeight: "25px",
            cursor: "pointer",
          }}
          className={classes.Answer}
          onClick={() => setVisibleAnswer(!visibleAnswer)}
        > */}
          <svg
            className={classes.base2}
            // width="571"
            // height="83"
            viewBox="0 0 571 80"
            fill="none"
          >
            <path
              d="M2.83695 13.1405C0.617939 7.55953 4.72958 1.50003 10.7355 1.50003L560.998 1.50006C565.692 1.50006 569.498 5.30564 569.498 10.0001L569.498 41.5L569.498 73C569.498 77.6944 565.692 81.5 560.998 81.5L10.7356 81.4999C4.72961 81.4999 0.617965 75.4404 2.83697 69.8595L12.4234 45.7489C13.5083 43.0202 13.5083 39.9798 12.4234 37.2511L2.83695 13.1405Z"
              fill="#F9EEE1"
              stroke="black"
              stroke-width="3"
            />
            <switch>
              <foreignObject
                x="3%"
                y="3%"
                width="445"
                height="1000"
                fontSize="0.8rem" //bilo je 1rem
                letterSpacing="0.2px"
                style={{ width: "97%", height: "100%" }}
                className={classes.PravaVelicinaTekstaOdgovor}
              >
                {props.answer}
              </foreignObject>
            </switch>
          </svg>
        </motion.div>

        {/* </div> */}

        {/* <div className={classes.Bottom}></div> */}
      </div>
    </>
  );
};

export default FaqItem;
