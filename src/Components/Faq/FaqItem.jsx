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
            scale: visibleAnswer ? 0 : 1,
          }}
          //   OVO sam
          initial={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          style={{ cursor: "pointer" }}
          className={classes.Question}
        >
          <svg
            className="base"
            xmlns="http://www.w3.org/2000/svg"
            width="76"
            height="68"
            viewBox="0 0 76 68"
            fill="none"
          >
            <path
              d="M50.9618 65.4932C53.8701 65.4318 56.545 63.8874 58.0524 61.3994L72.388 37.7369C73.9948 35.0847 74.0298 31.768 72.4793 29.0825L59.5743 6.73048C58.0239 4.04499 55.134 2.41694 52.0338 2.48237L24.3736 3.06612C21.4653 3.12751 18.7904 4.67188 17.2831 7.15986L2.94744 30.8224C1.34065 33.4745 1.30566 36.7913 2.85613 39.4767L15.7611 61.8288C17.3116 64.5143 20.2014 66.1423 23.3017 66.0769L50.9618 65.4932Z"
              fill="#F9EEE1"
              stroke="black"
              stroke-width="3"
            />
          </svg>
        </motion.div>

        <motion.div
          animate={{
            opacity: visibleAnswer ? 0 : 1,
            scale: visibleAnswer ? 0 : 1,
          }}
          //   OVO sam
          initial={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          style={{ cursor: "pointer" }}
          className={classes.Question}
        >
          <svg
            className="base"
            xmlns="http://www.w3.org/2000/svg"
            width="1045"
            height="76"
            viewBox="0 0 1045 76"
            fill="none"
          >
            <path
              d="M2.81255 15.1993C-0.413203 9.53279 3.67915 2.49417 10.1995 2.49417L1035 2.49423C1039.69 2.49423 1043.5 6.29981 1043.5 10.9942L1043.5 38.4942L1043.5 65.9941C1043.5 70.6885 1039.69 74.4941 1035 74.4941L10.1996 74.4941C3.67923 74.494 -0.413131 67.4554 2.81262 61.7889L12.8348 44.1835C14.8427 40.6563 14.8427 36.332 12.8348 32.8049L2.81255 15.1993Z"
              fill="#F9EEE1"
              stroke="black"
              stroke-width="3"
            />
            <switch>
              <foreignObject
                x="10%"
                y="20%"
                fontSize="2rem"
                style={{ width: "100%", height: "100%" }}
              >
                {props.question}
              </foreignObject>
            </switch>
          </svg>
        </motion.div>

        {/* ovome gore sam stavio isto da ide opacity od 1 do nula jer se nece videti i pitanje i odg u isto vreme
        zat sam i ovo stavio u motion di
         */}

        {/* <motion.div
          animate={{ rotate: visibleAnswer ? -45 : 0 }}
          initial={{ rotate: 0 }}
          transition={{ duration: 5 }}
          style={{
            cursor: "pointer",
            WebkitTapHighlightColor: "rgba(0,0,0,0)",
          }}
        >
          <i
            style={{  marginRight: "15px", marginLeft: "10px" 
            }}
            className="fas fa-plus"
          ></i>
        </motion.div> */}
      </div>
      {/* <div className="answerpop"
       style={{ cursor: "pointer", WebkitTapHighlightColor: "rgba(0,0,0,0)" }}
       onClick={() => setVisibleAnswer(!visibleAnswer)}> */}
      {/* <motion.div
        animate={{
          height: visibleAnswer ? "auto" : "0rem",
          opacity: visibleAnswer ? 1 : 0,
          scale: visibleAnswer? 1:0
        }}
        initial={{ height: "0rem", opacity: 0, scale: 0 }}
        //   OVO isto

        transition={{ duration: 1 }} //za gore
        
       
      >
        <svg   xmlns="http://www.w3.org/2000/svg" width="76" height="68" viewBox="0 0 76 68" fill="none">
        <path d="M50.9618 65.4932C53.8701 65.4318 56.545 63.8874 58.0524 61.3994L72.388 37.7369C73.9948 35.0847 74.0298 31.768 72.4793 29.0825L59.5743 6.73048C58.0239 4.04499 55.134 2.41694 52.0338 2.48237L24.3736 3.06612C21.4653 3.12751 18.7904 4.67188 17.2831 7.15986L2.94744 30.8224C1.34065 33.4745 1.30566 36.7913 2.85613 39.4767L15.7611 61.8288C17.3116 64.5143 20.2014 66.1423 23.3017 66.0769L50.9618 65.4932Z" fill="#F9EEE1" stroke="black" stroke-width="3"/>
        </svg>

        
      </motion.div> */}
      <div
        className={classes.FaqItem}
        onClick={() => setVisibleAnswer(!visibleAnswer)}
        style={{ cursor: "pointer", WebkitTapHighlightColor: "rgba(0,0,0,0)" }}
      >
        <motion.div
          animate={{
            height: visibleAnswer ? "auto" : "0rem",
            opacity: visibleAnswer ? 1 : 0,
            scale: visibleAnswer ? 1 : 0,
          }}
          className={classes.Answer1}
          initial={{ height: "0rem", opacity: 0, scale: 0 }}
          //   OVO isto

          transition={{ duration: 1 }} //za gore
          style={{
            overflow: "hidden",

            cursor: "pointer",
            WebkitTapHighlightColor: "rgba(0,0,0,0)", //ovo mu nista ne znaci
          }}
        >
          <svg
            className="base"
            xmlns="http://www.w3.org/2000/svg"
            width="76"
            height="68"
            viewBox="0 0 76 68"
            fill="none"
          >
            <path
              d="M50.9618 65.4932C53.8701 65.4318 56.545 63.8874 58.0524 61.3994L72.388 37.7369C73.9948 35.0847 74.0298 31.768 72.4793 29.0825L59.5743 6.73048C58.0239 4.04499 55.134 2.41694 52.0338 2.48237L24.3736 3.06612C21.4653 3.12751 18.7904 4.67188 17.2831 7.15986L2.94744 30.8224C1.34065 33.4745 1.30566 36.7913 2.85613 39.4767L15.7611 61.8288C17.3116 64.5143 20.2014 66.1423 23.3017 66.0769L50.9618 65.4932Z"
              fill="#F9EEE1"
              stroke="black"
              stroke-width="3"
            />
          </svg>
          <img className="second-img" src={LOGO} alt="LOGO" />
        </motion.div>

        <motion.div
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
            fontSize: "28px",
            cursor: "pointer",
          }}
          className={classes.Answer}
          onClick={() => setVisibleAnswer(!visibleAnswer)}
        >
          <svg
            className="base"
            xmlns="http://www.w3.org/2000/svg"
            width="571"
            height="83"
            viewBox="0 0 571 83"
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
                width="450"
                height="1000"
                fontSize="1rem"
                style={{ width: "100%", height: "100%" }}
              >
                {props.answer}
              </foreignObject>
            </switch>
          </svg>
        </motion.div>
      </div>
      {/* </div> */}

      {/* <div className={classes.Bottom}></div> */}
    </>
  );
};

export default FaqItem;
