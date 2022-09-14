import React, { useEffect, useState } from "react";
import classes from "./Faq.module.css";
import { motion } from "framer-motion";

const FaqItem = (props) => {
  const [visibleAnswer, setVisibleAnswer] = useState(false);

  return (
    <>
      <div
        className={classes.FaqItem}
        onClick={() => setVisibleAnswer(!visibleAnswer)}
        style={{ cursor: "pointer", WebkitTapHighlightColor: "rgba(0,0,0,0)" }}
      >
        <div></div>
        <motion.div
          animate={{ opacity: visibleAnswer ? 0 : 1 }}
          //   OVO sam
          initial={{ opacity: 0 }}
          transition={{ duration: 2.7 }}
          style={{ cursor: "pointer" }}
        >
          {props.question}
        </motion.div>
        {/* ovome gore sam stavio isto da ide opacity od 1 do nula jer se nece videti i pitanje i odg u isto vreme
        zat sam i ovo stavio u motion di
         */}
        <motion.div
          animate={{ rotate: visibleAnswer ? -45 : 0 }}
          initial={{ rotate: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            cursor: "pointer",
            WebkitTapHighlightColor: "rgba(0,0,0,0)",
          }}
        >
          <i
            style={{ marginRight: "15px", marginLeft: "10px" }}
            className="fas fa-plus"
          ></i>
        </motion.div>
      </div>
      <motion.div
        animate={{
          height: visibleAnswer ? "auto" : "0rem",
          opacity: visibleAnswer ? 1 : 0,
        }}
        initial={{ height: "0rem", opacity: 0 }}
        //   OVO isto

        transition={{ duration: 1 }}
        style={{
          overflow: "hidden",
          color: "black",
          fontSize: "28px",
        }}
        className={classes.Answer}
      >
        {props.answer}
      </motion.div>
      <div className={classes.Bottom}></div>
    </>
  );
};

export default FaqItem;
