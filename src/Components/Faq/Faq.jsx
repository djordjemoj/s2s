import React from "react";
import classes from "./Faq.module.css";
import FaqItem from "./FaqItem";

const Faq = () => {
  return (
    <div
      className="FaqSvaPitanja"
      
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
          odgRed2={"Forma za prijavu će biti otvorena do 9.10. u 23.59h."}
          odgRed3={""}
          odgRed4={""}
          answer={""}
        />

        <FaqItem
          dvaRedaPitanje={true}
          question={"Da li se mogu prijaviti za prisustvovanje"}
          question2={"na više radionica?"}
          odgRed1={"U okviru prijava odlučujete se za dve radionice,"}
          odgRed2={"od kojih je jedna prvi izbor, a druga alternativa."}
          odgRed3={"Nije moguće prisustvovati na više radionica,"}
          odgRed4={"zbog njihove istovremene vremenske realizacije."}
          answer={"   "}
        />
        <FaqItem
          dvaRedaPitanje={false}
          question={"Da li je obavezno prisustvo i na panelu i na radionici?"}
          odgRed2={
            "Možete se opredeliti i samo za panel diskusiju ili samo za radioncu,"
          }
          odgRed3={"mi svakako preporučujemo i jedno i drugo."}
          odgRed1={""}
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
            "Pored naziva radionica naznačeno je da li je računar potreban, a"
          }
          odgRed4={
            "poželjno je radi čuvanja podataka nositi svoj računar u svakom slučaju."
          }
          answer={"   "}
        />
        <FaqItem
          question={"Da li je potrebno predznanje za radionice?"}
          // question2={" poneti neku opremu?"}
          dvaRedaPitanje={false}
          odgRed1={"Za određene radionice na projektu je potrebno,"}
          odgRed2={"dok za druge nije jer se počinje od osnova."}
          odgRed3={"U opisu radionica je naznačeno u kojoj je"}
          odgRed4={" oblasti potrebno da imate predznanje."}
          answer={"   "}
        />
      </div>
    </div>
  );
};

export default Faq;
