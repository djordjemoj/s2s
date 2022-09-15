import React from "react";
import classes from "./Faq.module.css";
import FaqItem from "./FaqItem";

const Faq = (props) => {
  return (
    <div
      style={{
        minHeight: "70vh",
        // background:
        //   "linear-gradient(180deg, #0C4471 0%, #00233F 100%), #002440",
        zIndex: 10,
        position: "relative",
      }}
      id="faq"
    >
      <div className={classes.Faq}>
        <FaqItem
          question={"Question alfjsido ?"}
          answer={
            "Tsdcdcsihfcosid dsicjdifscdsdja edjoais cdasdcsdc sldc aks aic dklcja qiowd qoiwd COAI Ckzjnkjznkcajn"
          }
        />
        {/* <FaqItem
          question={'Da li je moguća individualna prijava?'}
          answer={
            'Nažalost, nije moguće prijaviti se individualno, jer su za učešće neophodni timovi.'
          }
        /> */}
        <FaqItem
          question={"Question alfjsido ?"}
          answer={
            "Tsihfcosid dsicjdifja edjoais cdac sldc aks aic dkTsihfcosid dsicjdifja edjoais cdac sldc aks aic dklcja qiowd qoiwd COAI Ckzjnkjznkcajnlcja qiowd qoiwd COAI Ckzjnkjznkcajn"
          }
        />
        <FaqItem
          question={"Question alfjsido ?"}
          answer={
            "Tsihfcosid dsicjdifja edjoais cdac sldc aks aic dklcjaTsihfcosid dsicjdifja edjoais cdac sldc aks aic dklcja qiowd qoiwd COAI Ckzjnkjznkcajn qiowd qoiwd COAI Ckzjnkjznkcajn"
          }
        />
        {/* <FaqItem
          question={'Ko može takmičarima sve biti mentor?'}
          answer={
            'Mentorsku podršku tokom takmičenja će činiti  nastavnici i saradnici sa fakulteta kao i alumni članovi  FONIS-a.'
          }
        /> */}
        <FaqItem
          question={
            "Question alfjsido ?"
          }
          answer={
            "Tsihfcosid dsicjdifja edjoais cdac sldc aks aic dkTsihfcosid dsicjdifja edjoais cdac sldc aks aic dklcja qiowd qoiwd COAI Ckzjnkjznkcajnlcja qiowd qoiwd COAI Ckzjnkjznkcajn"
          }
        />
        <FaqItem
          question={
            "Question alfjsido ?"
          }
          answer={"Tsihfcosid dsicjdifja edjoais cdac sldc aks aic dklcja qiowd qoiwd COAI Ckzjnkjznkcajn"}
        />
        
        
      </div>
      <div className={classes.chevron}></div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "-35px",
        }}
      ></div>
    </div>
  );
};

export default Faq;
