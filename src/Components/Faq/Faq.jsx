import React from "react";
import { Link } from "react-router-dom";
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
      id="faq"
    >
      <div className={classes.Faq}>
        <FaqItem
          dvaRedaPitanje={false}
          question={"Na koji način se mogu prijaviti za učešće na S2S-u?"}
          odgRed1={""}
          odgRed2={`Prijavljivanje se vrši popunjavanjem forme na sajtu.`}
          odgRed3={""}
          odgRed4={""}
          answer={""}
        />

        <FaqItem
          dvaRedaPitanje={false}
          question={"Ko sve ima pravo na učešće na S2S-u?"}
          odgRed1={""}
          odgRed2={
            "Svi studenti imaju pravo prijave, bez obzira na Univerzitet u Srbiji,"
          }
          odgRed3={" usmerenje ili godinu studiranja."}
          odgRed4={""}
          answer={""}
        />
        <FaqItem
          dvaRedaPitanje={false}
          question={"Do kada će biti otvorene prijave? "}
          odgRed1={""}
          odgRed2={"Forma za prijavu će biti otvorene do 9.10. u 23.59h."}
          odgRed3={""}
          odgRed4={""}
          answer={""}
        />

        <FaqItem
          dvaRedaPitanje={true}
          question={"Da li se mogu prijaviti za prisustvovanje"}
          question2={"na više radionica?"}
          odgRed1={"U okviru prijava vrši se odabir dve radionice,"}
          odgRed2={"od kojih se svaki student prima na jednu radionicu."}
          odgRed3={"Nije moguće prisustvovati na više radionica,"}
          odgRed4={
            "zbog istovremene vremenske  realizacije različitih radionica."
          }
          answer={"   "}
        />
        <FaqItem
          dvaRedaPitanje={false}
          question={"Da li je obavezno prisustvo i na panelu i na radionici?"}
          odgRed1={""}
          odgRed2={
            "Prisustvo na panel diskusiji je preporučljivo svim polaznicima koji su"
          }
          odgRed3={
            "zainteresovani da čuju nešto više (o putu od praktikanta do seniora.) <- ISPRAVITI OVO, ne znamo sta ce biti na panelu"
          }
          odgRed4={""}
          answer={""}
        />
        <FaqItem
          dvaRedaPitanje={false}
          question={"Da li je neophodno imati svoj računar za radionice?"}
          odgRed1={
            "Za određene radionice na projektu računar nije neophodan jer se"
          }
          odgRed2={
            "održavaju u salama sa računarima, dok je za druge neophodno."
          }
          odgRed3={
            "U opisu radionica naznačeno je da li je računar potreban, a"
          }
          odgRed4={
            "poželjno je radi čuvanja podataka nositi svoj računar u svakom slučaju."
          }
          answer={"   "}
        />
        <FaqItem
          question={"Koliko dugo će trajati radionice i da li je potrebno"}
          question2={" poneti neku opremu?"}
          dvaRedaPitanje={true}
          odgRed1={
            "Radionice traju 3 i po sata sa pauzama od po 15 minuta na svakih sat"
          }
          odgRed2={
            "vremena. Radi što efikasnijeg praćenja radionice, neophodno je da"
          }
          odgRed3={
            "polaznici imaju instaliran potreban softver koji je naglašen u opisu"
          }
          odgRed4={"same radionice za koju su se opredelili."}
          answer={"   "}
        />
      </div>
    </div>
  );
};

export default Faq;
