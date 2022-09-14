import React from "react";
import classes from "./Faq.module.css";
import FaqItem from "./FaqItem";

const Faq = (props) => {
  return (
    <div
      style={{
        minHeight: "70vh",
        background:
          "linear-gradient(180deg, #0C4471 0%, #00233F 100%), #002440",
        zIndex: 10,
        position: "relative",
      }}
      id="faq"
    >
      <div className={classes.Faq}>
        <FaqItem
          question={"Koja je tema FON Hakatona?"}
          answer={
            "Za sada je tema Hakatona tajna, ali će biti otkrivena na brifingu odmah nakon otvaranja takmičenja."
          }
        />
        {/* <FaqItem
          question={'Da li je moguća individualna prijava?'}
          answer={
            'Nažalost, nije moguće prijaviti se individualno, jer su za učešće neophodni timovi.'
          }
        /> */}
        <FaqItem
          question={" Koliko članova tim može imati?"}
          answer={
            "Tim treba da sadrži od 3 do 4 člana.  Nije moguća individualna prijava, jer su za učešće neophodni timovi."
          }
        />
        <FaqItem
          question={"Da li će nam biti dostupne konsultacije sa mentorima?"}
          answer={
            "Da. Tokom izrade rešenja, u određenim terminima, takmičari će imati mogućnost konsultacije sa mentorima. Mentorsku podršku tokom takmičenja će činiti  nastavnici i saradnici sa fakulteta kao i alumni članovi  FONIS-a."
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
            "Da li će se takmičenje ove godine održati uživo ili online?"
          }
          answer={
            "Ove godine će se takmičenje održati uživo u celosti. Takmičarima će na raspolaganju biti prostorije Fakulteta organizacionih nauka, gde je cilj da se za 24h osmisli najprikladnije softversko rešenje na zadatu temu. Takmičenju će prethoditi selekcija koja će biti održana online."
          }
        />
        <FaqItem
          question={
            "Koje tehnologije dolaze u obzir za razvoj softverskog rešenja?"
          }
          answer={"Takmičari mogu koristiti tehnologije po svom izboru."}
        />
        <FaqItem
          question={"Ko se sve može prijaviti za učešće na Hakatonu?"}
          answer={
            "Pravo učešća na Hakatonu imaju svi stariji od 16 i mlađi od 26 godina kako iz Srbije tako i iz inostranstva, bez obzira na državljanstvo ili nivo formalnog obrazovanja."
          }
        />
        <FaqItem
          question={
            "Kako izgleda bodovanje pri selekciji za učešće na takmičenju?"
          }
          answer={
            "Od ove godine selekciju čine tri dela, najpre sama prijava, zatim test znanja i konačno algoritamski zadaci. Pri pregledanju Vaših prijava, cilj nam je da uočimo motivaciju. Potrebno je da svi članovi tima prilože i CV koji nam pomaže da bolje sagledamo vaše znanje, iskustvo i veštine kada je programiranje u pitanju. Test znanja se radi online i timski na Moodle platformi. Poslednji deo selekcije je test algoritamskih zadataka koji se, takođe, radi online i timski."
          }
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
