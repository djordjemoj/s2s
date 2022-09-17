import React from "react";
import classes from "./Faq.module.css";
import FaqItem from "./FaqItem";

const Faq = (props) => {
  return (
    <div
      style={
        {
          // minHeight: "70vh",
          // background:
          //   "linear-gradient(180deg, #0C4471 0%, #00233F 100%), #002440",
          // zIndex: 10,
          // position: "relative",
          // border: "2px solid red"
        }
      }
      className="FaqSvaPitanja"
    >
      <div className={classes.Faq}>
        <FaqItem
          question={"Na koji način se mogu prijaviti za učešće na S2S-u?"}
          answer={"Prijavljivanje se vrši popunjavanjem forme na sajtu."}
        />
        {/* <FaqItem
          question={'Da li je moguća individualna prijava?'}
          answer={
            'Nažalost, nije moguće prijaviti se individualno, jer su za učešće neophodni timovi.'
          }
        /> */}
        <FaqItem
          question={"Ko sve ima pravo na učešće na S2S-u?"}
          answer={
            "Svi studenti imaju pravo prijave, bez obzira na Univerzitet u Srbiji, usmerenje ili godinu studiranja."
          }
        />
        <FaqItem
          question={"Do kada će biti otvorene prijave? "}
          answer={"Forme za prijavu će biti otvorene do 9.10. 23.59h."}
        />

        <FaqItem
          question={
            "Da li se mogu prijaviti za prisustvovanje na više radionica?"
          }
          answer={
            "U okviru prijava vrši se odabir dve radionice, od kojih se svaki student prima na jednu radionicu. Nije moguće prisustvovati na više radionica, zbog istovremene vremenske  realizacije različitih radionica."
          }
        />
        <FaqItem
          question={"Da li je obavezno prisustvo i na panelu i na radionici?"}
          answer={
            "Prisustvo na panel diskusiji je preporučljivo svim polaznicima koji su zainteresovani da čuju nešto više o putu od praktikanta do seniora."
          }
        />
        <FaqItem
          question={"Da li je neophodno imati svoj računar za radionice?"}
          answer={
            "Za određene radionice na projektu računar nije neophodan jer se održavaju u salama sa računarima, dok je za druge neophodno. U opisu radionica naznačeno je da li je računar potreban, a poželjno je radi čuvanja podataka nositi svoj računar u svakom slučaju."
          }
        />
        <FaqItem
          question={
            "Koliko dugo će trajati radionice i da li je potrebno poneti neku opremu?"
          }
          answer={
            "Radionice traju 3 i po sata sa pauzama od po 15 minuta na svakih sat vremena. Radi što efikasnijeg praćenja radionice, neophodno je da polaznici imaju instaliran potreban softver koji je naglašen u opisu same radionice za koju su se opredelili."
          }
        />
      </div>
    </div>
  );
};

export default Faq;
