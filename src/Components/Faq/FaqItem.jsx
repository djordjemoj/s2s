import React, {  useState } from "react";
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
            <svg
              className={classes.faqMaliHex}
              fill="none"
              viewBox="-0 0 120 105"
            >
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
          <div className={classes.pitanjeContainer}>

            <svg
              className={classes.basePitanje}
              // width="1047"
              // height="102"
              viewBox="-0 0 1047 102"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0265 1.50004L1037 1.50009C1041.69 1.50009 1045.5 5.30567 1045.5 10.0001L1045.5 51L1045.5 91.9999C1045.5 96.6944 1041.69 100.5 1037 100.5L10.0266 100.5C3.95522 100.5 -0.158535 94.3184 2.18571 88.7179L16.1149 55.4404C17.304 52.5996 17.3041 49.4005 16.1149 46.5597L2.18565 13.282C-0.158598 7.68152 3.95513 1.50004 10.0265 1.50004Z"
                fill="#F9EEE1"
                stroke="black"
                stroke-width="5"
              />
           
              <text
                className={classes.PravaVelicinaTeksta}
                x="50%"
                y={props.dvaRedaPitanje === true ? "37%" : "53%"}
                fill="black"
                textAnchor="middle"
                fontWeight="650"
                dominant-baseline="middle"
              >
                {props.question}
              </text>
              {props.dvaRedaPitanje === true && (
                <text
                  className={classes.PravaVelicinaTeksta}
                  x="50%"
                  y="73%"
                  fill="black"
                  textAnchor="middle"
                  fontWeight="650"
                  dominant-baseline="middle"
                >
                  {props.question2}
                </text>
              )}
            </svg>
          </div>
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
          
          <div className={classes.base}>
            <svg
              className={classes.faqVelikiHex}
              fill="none"
              viewBox="2.5 -13 120 120"
            >
              <path
                d="M90.9745 92.0013L109.138 60.707C112.463 54.9776 112.471 47.9074 109.159 42.1703L91.2306 11.1172C87.9184 5.38022 81.7914 1.85212 75.1668 1.86729L38.9834 1.95011C32.4042 1.96516 26.3281 5.47323 23.0255 11.1634L4.86203 42.4578C1.53664 48.1872 1.52855 55.2574 4.84082 60.9944L22.7693 92.0475C26.0816 97.7845 32.2086 101.313 38.8331 101.297L75.0166 101.215C81.5957 101.2 87.6719 97.6915 90.9745 92.0013Z"
                fill="#F9EEE1"
                stroke="black"
                stroke-width="3"
              />
            </svg>
            <img className={classes.slicicaLogo} src={LOGO} alt="LOGO" />
          </div>

          
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
         
            <text
              className={classes.PravaVelicinaTekstaOdgovor}
              x="50%"
              y="20%"
              fill="black"
              textAnchor="middle"
              fontWeight="650"
              dominant-baseline="middle"
            >
              {props.odgRed1}
            </text>
            <text
              className={classes.PravaVelicinaTekstaOdgovor}
              x="50%"
              y="42%"
              fill="black"
              textAnchor="middle"
              fontWeight="650"
              dominant-baseline="middle"
            >
              {props.odgRed2}
            </text>
            <text
              className={classes.PravaVelicinaTekstaOdgovor}
              x="50%"
              y="64%"
              fill="black"
              textAnchor="middle"
              fontWeight="650"
              dominant-baseline="middle"
            >
              {props.odgRed3}
            </text>
            <text
              className={classes.PravaVelicinaTekstaOdgovor}
              x="50%"
              y="86%"
              fill="black"
              textAnchor="middle"
              fontWeight="650"
              dominant-baseline="middle"
            >
              {props.odgRed4}
            </text>
          </svg>
        </motion.div>

      </div>
    </>
  );
};

export default FaqItem;
