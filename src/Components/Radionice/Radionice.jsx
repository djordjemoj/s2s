import React, { useState } from "react";
import "../Radionice/Radionice.css";
import csharp from "../../assets/radionicaCS.png";
import after from "../../assets/radioniceAe.png";
import figma from "../../assets/radioniceFigma.png";
import javaSlika from "../../assets/radioniceJava.png";
import python from "../../assets/radionicePython.png";
import reactSlika from "../../assets/radioniceReact.png";
import seoSlika from "../../assets/radioniceSeo.png";
import unity from "../../assets/radioniceUnity.png";
import nodeSlika from "../../assets/radioniceNode.png";
import agile from "../../assets/radioniceAgile.png";
import Modal from "./Modal";
import Boris from "../../assets/Boris.png";
import "../Radionice/Modal.css";

// function obavestenje() {
//   alert("Hello! I am an alert box!!");
// }

const Radionice = () => {
  const [openModal, setOpenModal] = useState(false);

  const modali = [
    {
      naslov: "ASP.NET",
      prviTekst:
        "Ukoliko ste novi u svetu programiranja, ono što vam je potrebno je jezik koji pruža odličnu osnovu za dalje usavršavanje. Veoma jednostavan za učenje, C već skoro pedeset godina važi za jedan od najbitnijih programskih jezika. Ovaj programski jezik opšte namene se još uvek uspešno koristi za pisanje programa u različitim oblastima, te su tako kompajleri, biblioteke i interpreteri drugih programskih jezika napisani upravo C programskim jezikom. Izađite iz zone komfora i priključite se Intro to C radionici, jer je programiranje upravo takvo – svaki problem je rešiv, ali isto tako i jedinstven i treba mu prići na takav način.",
      nivo: "Nivo: Osnovni",
      predznanje: "Potrebno predznanje: Nije potrebno",
      potrebanSoft: "Potreban softver: Visual studio",
      predavac: "Predavač: Stefan Jovanović",
      drugiTekst:
        "Druga sam godina FON-a, smer Informacioni sistemi i tehnologije. Programiranjem se bavim još od osnovne škole, primarno Game Development-om i Fullstack Web Development-om. Sa C-om sam se upoznao u srednjoj školi gde sam kroz sve četiri godine učio C i C++ u svrhe takmičenja iz programiranja. Svoje znanje iz C-a dodatno sam upotpunio na prvoj godini studija na predmetu Programiranje 1 i želja mi je da ovom radionicom to upotpunjeno znanje prenesem drugima.",
      slikaPredavaca1: Boris,
      slikaPredavaca2: Boris,
      laptop: false,
    },
    {
      naslov: "ASP.NET",
      prviTekst:
        "Ukoliko ste novi u svetu programiranja, ono što vam je potrebno je jezik koji pruža odličnu osnovu za dalje usavršavanje. Veoma jednostavan za učenje, C već skoro pedeset godina važi za jedan od najbitnijih programskih jezika. Ovaj programski jezik opšte namene se još uvek uspešno koristi za pisanje programa u različitim oblastima, te su tako kompajleri, biblioteke i interpreteri drugih programskih jezika napisani upravo C programskim jezikom. Izađite iz zone komfora i priključite se Intro to C radionici, jer je programiranje upravo takvo – svaki problem je rešiv, ali isto tako i jedinstven i treba mu prići na takav način.",
      nivo: "Nivo: Osnovni",
      predznanje: "Potrebno predznanje: Nije potrebno",
      potrebanSoft: "Potreban softver: Visual studio",
      predavac: "Predavač: Stefan Jovanović",
      drugiTekst:
        "Druga sam godina FON-a, smer Informacioni sistemi i tehnologije. Programiranjem se bavim još od osnovne škole, primarno Game Development-om i Fullstack Web Development-om. Sa C-om sam se upoznao u srednjoj školi gde sam kroz sve četiri godine učio C i C++ u svrhe takmičenja iz programiranja. Svoje znanje iz C-a dodatno sam upotpunio na prvoj godini studija na predmetu Programiranje 1 i želja mi je da ovom radionicom to upotpunjeno znanje prenesem drugima.",
      slikaPredavaca1: Boris,
      slikaPredavaca2: Boris,
      laptop: false,
    },
    {
      naslov: "ASP.NET",
      prviTekst:
        "Ukoliko ste novi u svetu programiranja, ono što vam je potrebno je jezik koji pruža odličnu osnovu za dalje usavršavanje. Veoma jednostavan za učenje, C već skoro pedeset godina važi za jedan od najbitnijih programskih jezika. Ovaj programski jezik opšte namene se još uvek uspešno koristi za pisanje programa u različitim oblastima, te su tako kompajleri, biblioteke i interpreteri drugih programskih jezika napisani upravo C programskim jezikom. Izađite iz zone komfora i priključite se Intro to C radionici, jer je programiranje upravo takvo – svaki problem je rešiv, ali isto tako i jedinstven i treba mu prići na takav način.",
      nivo: "Nivo: Osnovni",
      predznanje: "Potrebno predznanje: Nije potrebno",
      potrebanSoft: "Potreban softver: Visual studio",
      predavac: "Predavač: Stefan Jovanović",
      drugiTekst:
        "Druga sam godina FON-a, smer Informacioni sistemi i tehnologije. Programiranjem se bavim još od osnovne škole, primarno Game Development-om i Fullstack Web Development-om. Sa C-om sam se upoznao u srednjoj školi gde sam kroz sve četiri godine učio C i C++ u svrhe takmičenja iz programiranja. Svoje znanje iz C-a dodatno sam upotpunio na prvoj godini studija na predmetu Programiranje 1 i želja mi je da ovom radionicom to upotpunjeno znanje prenesem drugima.",
      slikaPredavaca1: Boris,
      slikaPredavaca2: Boris,
      laptop: false,
    },
    {
      naslov: "ASP.NET",
      prviTekst:
        "Ukoliko ste novi u svetu programiranja, ono što vam je potrebno je jezik koji pruža odličnu osnovu za dalje usavršavanje. Veoma jednostavan za učenje, C već skoro pedeset godina važi za jedan od najbitnijih programskih jezika. Ovaj programski jezik opšte namene se još uvek uspešno koristi za pisanje programa u različitim oblastima, te su tako kompajleri, biblioteke i interpreteri drugih programskih jezika napisani upravo C programskim jezikom. Izađite iz zone komfora i priključite se Intro to C radionici, jer je programiranje upravo takvo – svaki problem je rešiv, ali isto tako i jedinstven i treba mu prići na takav način.",
      nivo: "Nivo: Osnovni",
      predznanje: "Potrebno predznanje: Nije potrebno",
      potrebanSoft: "Potreban softver: Visual studio",
      predavac: "Predavač: Stefan Jovanović",
      drugiTekst:
        "Druga sam godina FON-a, smer Informacioni sistemi i tehnologije. Programiranjem se bavim još od osnovne škole, primarno Game Development-om i Fullstack Web Development-om. Sa C-om sam se upoznao u srednjoj školi gde sam kroz sve četiri godine učio C i C++ u svrhe takmičenja iz programiranja. Svoje znanje iz C-a dodatno sam upotpunio na prvoj godini studija na predmetu Programiranje 1 i želja mi je da ovom radionicom to upotpunjeno znanje prenesem drugima.",
      slikaPredavaca1: Boris,
      slikaPredavaca2: Boris,
      laptop: false,
    },
    {
      naslov: "ASP.NET",
      prviTekst:
        "Ukoliko ste novi u svetu programiranja, ono što vam je potrebno je jezik koji pruža odličnu osnovu za dalje usavršavanje. Veoma jednostavan za učenje, C već skoro pedeset godina važi za jedan od najbitnijih programskih jezika. Ovaj programski jezik opšte namene se još uvek uspešno koristi za pisanje programa u različitim oblastima, te su tako kompajleri, biblioteke i interpreteri drugih programskih jezika napisani upravo C programskim jezikom. Izađite iz zone komfora i priključite se Intro to C radionici, jer je programiranje upravo takvo – svaki problem je rešiv, ali isto tako i jedinstven i treba mu prići na takav način.",
      nivo: "Nivo: Osnovni",
      predznanje: "Potrebno predznanje: Nije potrebno",
      potrebanSoft: "Potreban softver: Visual studio",
      predavac: "Predavač: Stefan Jovanović",
      drugiTekst:
        "Druga sam godina FON-a, smer Informacioni sistemi i tehnologije. Programiranjem se bavim još od osnovne škole, primarno Game Development-om i Fullstack Web Development-om. Sa C-om sam se upoznao u srednjoj školi gde sam kroz sve četiri godine učio C i C++ u svrhe takmičenja iz programiranja. Svoje znanje iz C-a dodatno sam upotpunio na prvoj godini studija na predmetu Programiranje 1 i želja mi je da ovom radionicom to upotpunjeno znanje prenesem drugima.",
      slikaPredavaca1: Boris,
      slikaPredavaca2: Boris,
      laptop: false,
    },
    {
      naslov: "ASP.NET",
      prviTekst:
        "Ukoliko ste novi u svetu programiranja, ono što vam je potrebno je jezik koji pruža odličnu osnovu za dalje usavršavanje. Veoma jednostavan za učenje, C već skoro pedeset godina važi za jedan od najbitnijih programskih jezika. Ovaj programski jezik opšte namene se još uvek uspešno koristi za pisanje programa u različitim oblastima, te su tako kompajleri, biblioteke i interpreteri drugih programskih jezika napisani upravo C programskim jezikom. Izađite iz zone komfora i priključite se Intro to C radionici, jer je programiranje upravo takvo – svaki problem je rešiv, ali isto tako i jedinstven i treba mu prići na takav način.",
      nivo: "Nivo: Osnovni",
      predznanje: "Potrebno predznanje: Nije potrebno",
      potrebanSoft: "Potreban softver: Visual studio",
      predavac: "Predavač: Stefan Jovanović",
      drugiTekst:
        "Druga sam godina FON-a, smer Informacioni sistemi i tehnologije. Programiranjem se bavim još od osnovne škole, primarno Game Development-om i Fullstack Web Development-om. Sa C-om sam se upoznao u srednjoj školi gde sam kroz sve četiri godine učio C i C++ u svrhe takmičenja iz programiranja. Svoje znanje iz C-a dodatno sam upotpunio na prvoj godini studija na predmetu Programiranje 1 i želja mi je da ovom radionicom to upotpunjeno znanje prenesem drugima.",
      slikaPredavaca1: Boris,
      slikaPredavaca2: Boris,
      laptop: false,
    },
    {
      naslov: "ASP.NET",
      prviTekst:
        "Ukoliko ste novi u svetu programiranja, ono što vam je potrebno je jezik koji pruža odličnu osnovu za dalje usavršavanje. Veoma jednostavan za učenje, C već skoro pedeset godina važi za jedan od najbitnijih programskih jezika. Ovaj programski jezik opšte namene se još uvek uspešno koristi za pisanje programa u različitim oblastima, te su tako kompajleri, biblioteke i interpreteri drugih programskih jezika napisani upravo C programskim jezikom. Izađite iz zone komfora i priključite se Intro to C radionici, jer je programiranje upravo takvo – svaki problem je rešiv, ali isto tako i jedinstven i treba mu prići na takav način.",
      nivo: "Nivo: Osnovni",
      predznanje: "Potrebno predznanje: Nije potrebno",
      potrebanSoft: "Potreban softver: Visual studio",
      predavac: "Predavač: Stefan Jovanović",
      drugiTekst:
        "Druga sam godina FON-a, smer Informacioni sistemi i tehnologije. Programiranjem se bavim još od osnovne škole, primarno Game Development-om i Fullstack Web Development-om. Sa C-om sam se upoznao u srednjoj školi gde sam kroz sve četiri godine učio C i C++ u svrhe takmičenja iz programiranja. Svoje znanje iz C-a dodatno sam upotpunio na prvoj godini studija na predmetu Programiranje 1 i želja mi je da ovom radionicom to upotpunjeno znanje prenesem drugima.",
      slikaPredavaca1: Boris,
      slikaPredavaca2: Boris,
      laptop: false,
    },
    {
      naslov: "ASP.NET",
      prviTekst:
        "Ukoliko ste novi u svetu programiranja, ono što vam je potrebno je jezik koji pruža odličnu osnovu za dalje usavršavanje. Veoma jednostavan za učenje, C već skoro pedeset godina važi za jedan od najbitnijih programskih jezika. Ovaj programski jezik opšte namene se još uvek uspešno koristi za pisanje programa u različitim oblastima, te su tako kompajleri, biblioteke i interpreteri drugih programskih jezika napisani upravo C programskim jezikom. Izađite iz zone komfora i priključite se Intro to C radionici, jer je programiranje upravo takvo – svaki problem je rešiv, ali isto tako i jedinstven i treba mu prići na takav način.",
      nivo: "Nivo: Osnovni",
      predznanje: "Potrebno predznanje: Nije potrebno",
      potrebanSoft: "Potreban softver: Visual studio",
      predavac: "Predavač: Stefan Jovanović",
      drugiTekst:
        "Druga sam godina FON-a, smer Informacioni sistemi i tehnologije. Programiranjem se bavim još od osnovne škole, primarno Game Development-om i Fullstack Web Development-om. Sa C-om sam se upoznao u srednjoj školi gde sam kroz sve četiri godine učio C i C++ u svrhe takmičenja iz programiranja. Svoje znanje iz C-a dodatno sam upotpunio na prvoj godini studija na predmetu Programiranje 1 i želja mi je da ovom radionicom to upotpunjeno znanje prenesem drugima.",
      slikaPredavaca1: Boris,
      slikaPredavaca2: Boris,
      laptop: false,
    },
    {
      naslov: "ASP.NET",
      prviTekst:
        "Ukoliko ste novi u svetu programiranja, ono što vam je potrebno je jezik koji pruža odličnu osnovu za dalje usavršavanje. Veoma jednostavan za učenje, C već skoro pedeset godina važi za jedan od najbitnijih programskih jezika. Ovaj programski jezik opšte namene se još uvek uspešno koristi za pisanje programa u različitim oblastima, te su tako kompajleri, biblioteke i interpreteri drugih programskih jezika napisani upravo C programskim jezikom. Izađite iz zone komfora i priključite se Intro to C radionici, jer je programiranje upravo takvo – svaki problem je rešiv, ali isto tako i jedinstven i treba mu prići na takav način.",
      nivo: "Nivo: Osnovni",
      predznanje: "Potrebno predznanje: Nije potrebno",
      potrebanSoft: "Potreban softver: Visual studio",
      predavac: "Predavač: Stefan Jovanović",
      drugiTekst:
        "Druga sam godina FON-a, smer Informacioni sistemi i tehnologije. Programiranjem se bavim još od osnovne škole, primarno Game Development-om i Fullstack Web Development-om. Sa C-om sam se upoznao u srednjoj školi gde sam kroz sve četiri godine učio C i C++ u svrhe takmičenja iz programiranja. Svoje znanje iz C-a dodatno sam upotpunio na prvoj godini studija na predmetu Programiranje 1 i želja mi je da ovom radionicom to upotpunjeno znanje prenesem drugima.",
      slikaPredavaca1: Boris,
      slikaPredavaca2: Boris,
      laptop: false,
    },
    {
      naslov: "UNITY",
      prviTekst:
        "Ukoliko ste novi u svetu programiranja, ono što vam je potrebno je jezik koji pruža odličnu osnovu za dalje usavršavanje. Veoma jednostavan za učenje, C već skoro pedeset godina važi za jedan od najbitnijih programskih jezika. Ovaj programski jezik opšte namene se još uvek uspešno koristi za pisanje programa u različitim oblastima, te su tako kompajleri, biblioteke i interpreteri drugih programskih jezika napisani upravo C programskim jezikom. Izađite iz zone komfora i priključite se Intro to C radionici, jer je programiranje upravo takvo – svaki problem je rešiv, ali isto tako i jedinstven i treba mu prići na takav način.",
      nivo: "Nivo: Osnovni",
      predznanje: "Potrebno predznanje: Nije potrebno",
      potrebanSoft: "Potreban softver: Visual studio",
      predavac: "Predavač: Stefan Jovanović",
      drugiTekst:
        "Druga sam godina FON-a, smer Informacioni sistemi i tehnologije. Programiranjem se bavim još od osnovne škole, primarno Game Development-om i Fullstack Web Development-om. Sa C-om sam se upoznao u srednjoj školi gde sam kroz sve četiri godine učio C i C++ u svrhe takmičenja iz programiranja. Svoje znanje iz C-a dodatno sam upotpunio na prvoj godini studija na predmetu Programiranje 1 i želja mi je da ovom radionicom to upotpunjeno znanje prenesem drugima.",
      slikaPredavaca1: Boris,
      slikaPredavaca2: Boris,
      laptop: false,
    },

  ];
  const [trenutniModal, setOpenTrenutniModal] = useState(modali[0]);

  function handlePromenaModala(index) {
    setOpenTrenutniModal(modali[index]);
    setOpenModal(true);
  }

  return (
    <div id="radionice">
      {/* <div>
          <svg className="radioniceZnak" viewBox="0 0 1355 223" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M211.639 263.247L13.4181 364.738C8.42747 367.294 2.5 363.669 2.5 358.063L2.5 10C2.5 5.8579 5.85786 2.50003 10 2.50003L618.917 2.50003C621.258 2.50003 623.464 3.5931 624.883 5.45534L656.082 46.4131L658.071 44.8982L656.082 46.4132C658.455 49.5285 662.193 51.3387 666.08 51.3387H968.893C972.753 51.3387 976.476 49.5532 978.852 46.4708L1010.5 5.42075C1011.92 3.57893 1014.11 2.50003 1016.44 2.50003L1387.99 2.5C1392.14 2.5 1395.49 5.85787 1395.49 10V357.325C1395.49 363.06 1389.32 366.673 1384.32 363.863L1206.72 264.032C1204.85 262.981 1202.74 262.429 1200.59 262.429H1164.95C1162.98 262.429 1161.03 262.897 1159.27 263.795L951.41 369.871C949.268 370.964 946.733 370.964 944.591 369.871L736.742 263.796C734.981 262.897 733.032 262.429 731.056 262.43L693.3 262.443C691.312 262.444 689.353 262.919 687.585 263.828L481.485 369.88C479.364 370.971 476.851 370.989 474.715 369.927L261.033 263.717C259.357 262.885 257.516 262.439 255.645 262.412L217.512 261.875C215.472 261.846 213.455 262.317 211.639 263.247Z" fill="#F99D1D" stroke="black" strokeWidth="5"/>
          <text fontFamily="" fontSize="40" text-anchor="middle" x="35%" y="45%" dominant-baseline="middle" fill="#ffffff">
              <tspan>RADIONICE</tspan>
            </text>
          </svg>
      </div> */}
      <div className="prviZnak"></div>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        modali={trenutniModal}
      />
      <div className="page">
        <div className="container">
          <div className="hexagonArea first">
            <div className="hexagon" onClick={() => handlePromenaModala(0)}>
              <h2 className="radionicaNaziv">ASP.NET</h2>
              <div className="blanket"></div>
              <img src={csharp} alt="" />
              <button
                className="popupButton"
                onClick={() => handlePromenaModala(0)}
              >
                Saznaj više
              </button>
            </div>
            <div className="hexagon" onClick={() => handlePromenaModala(1)}>
              <h2 className="radionicaNaziv">After Effects</h2>
              <div className="blanket"></div>
              <img src={after} alt="" />
              <button
                className="popupButton"
                onClick={() => handlePromenaModala(1)}
              >
                Saznaj više
              </button>
            </div>
            <div className="hexagon" onClick={() => handlePromenaModala(2)}>
              <h2 className="radionicaNaziv">Agile</h2>
              <div className="blanket"></div>
              <img src={agile} alt="" />
              <button
                className="popupButton"
                onClick={() => handlePromenaModala(2)}
              >
                Saznaj više
              </button>
            </div>
          </div>
          <div className="hexagonArea second">
            <div className="hexagon" onClick={() => handlePromenaModala(3)}>
              <h2 className="radionicaNaziv">Figma</h2>
              <div className="blanket"></div>
              <img src={figma} alt="" />
              <button
                className="popupButton"
                onClick={() => handlePromenaModala(3)}
              >
                Saznaj više
              </button>
            </div>
            <div className="hexagon" onClick={() => handlePromenaModala(4)}>
              <h2 className="radionicaNaziv">Java</h2>
              <div className="blanket"></div>
              <img src={javaSlika} alt="" />
              <button
                className="popupButton"
                onClick={() => handlePromenaModala(4)}
              >
                Saznaj više
              </button>
            </div>
          </div>
          <div className="hexagonArea first">
            <div className="hexagon" onClick={() => handlePromenaModala(5)}>
              <h2 className="radionicaNaziv">Node.js</h2>
              <div className="blanket"></div>
              <img src={nodeSlika} alt="" />
              <button
                className="popupButton"
                onClick={() => handlePromenaModala(5)}
              >
                Saznaj više
              </button>
            </div>
            <div className="hexagon" onClick={() => handlePromenaModala(6)}>
              <h2 className="radionicaNaziv">Python</h2>
              <div className="blanket"></div>
              <img src={python} alt="" />
              <button
                className="popupButton"
                onClick={() => handlePromenaModala(6)}
              >
                Saznaj više
              </button>
            </div>
            <div className="hexagon" onClick={() => handlePromenaModala(7)}>
              <h2 className="radionicaNaziv">React</h2>
              <div className="blanket"></div>
              <img src={reactSlika} alt="" />
              <button
                className="popupButton"
                onClick={() => handlePromenaModala(7)}
              >
                Saznaj više
              </button>
            </div>
          </div>
          <div className="hexagonArea second">
            <div className="hexagon" onClick={() => handlePromenaModala(8)}>
              <h2 className="radionicaNaziv">SEO</h2>
              <div className="blanket"></div>
              <img src={seoSlika} alt="" />
              <button
                className="popupButton"
                onClick={() => handlePromenaModala(8)}
              >
                Saznaj više
              </button>
            </div>
            <div className="hexagon" onClick={() => handlePromenaModala(9)}>
              <h2 className="radionicaNaziv">Unity</h2>
              <div className="blanket"></div>
              <img src={unity} alt="" />
              <button
                className="popupButton"
                onClick={() => handlePromenaModala(9)}
              >
                Saznaj više
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="radioniceDivider">
        <svg
          viewBox="0 0 1000 374"
          fill="black"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_622_4693" fill="white">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M583.488 1.44434L691.781 60.4073C694.997 62.1585 696.999 65.5277 696.999 69.1898V123.834C697 123.89 697 123.945 697 124V234.762C697 242.529 688.532 247.331 681.867 243.344L593.335 190.392C590.334 188.597 586.612 188.5 583.521 190.138L470.551 249.985C467.695 251.497 464.285 251.537 461.395 250.091L341.007 189.856C338.06 188.381 334.575 188.453 331.691 190.049L224.532 249.335C221.153 251.204 217.034 250.987 213.876 248.765C198.747 238.123 153.274 206.683 120.37 189.705C117.621 188.286 114.386 188.282 111.622 189.672C83.3805 203.871 38.4277 229.851 15.1219 243.492C8.42975 247.409 0 242.574 0 234.82V149.641C-0.00065033 149.594 -0.000976562 149.547 -0.000976562 149.5L-0.000427246 69.1295C-0.000366211 65.5207 1.94403 62.1919 5.08746 60.4192L109.399 1.59358C112.277 -0.0294342 115.771 -0.126083 118.734 1.33536L228.89 55.6617L331.955 1.29031C334.694 -0.154373 337.947 -0.249054 340.765 1.03391L456.43 53.6953C459.123 54.9215 462.221 54.8919 464.891 53.6143L574.389 1.20679C577.285 -0.17897 580.669 -0.0906067 583.488 1.44434Z"
            />
          </mask>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M583.488 1.44434L691.781 60.4073C694.997 62.1585 696.999 65.5277 696.999 69.1898V123.834C697 123.89 697 123.945 697 124V234.762C697 242.529 688.532 247.331 681.867 243.344L593.335 190.392C590.334 188.597 586.612 188.5 583.521 190.138L470.551 249.985C467.695 251.497 464.285 251.537 461.395 250.091L341.007 189.856C338.06 188.381 334.575 188.453 331.691 190.049L224.532 249.335C221.153 251.204 217.034 250.987 213.876 248.765C198.747 238.123 153.274 206.683 120.37 189.705C117.621 188.286 114.386 188.282 111.622 189.672C83.3805 203.871 38.4277 229.851 15.1219 243.492C8.42975 247.409 0 242.574 0 234.82V149.641C-0.00065033 149.594 -0.000976562 149.547 -0.000976562 149.5L-0.000427246 69.1295C-0.000366211 65.5207 1.94403 62.1919 5.08746 60.4192L109.399 1.59358C112.277 -0.0294342 115.771 -0.126083 118.734 1.33536L228.89 55.6617L331.955 1.29031C334.694 -0.154373 337.947 -0.249054 340.765 1.03391L456.43 53.6953C459.123 54.9215 462.221 54.8919 464.891 53.6143L574.389 1.20679C577.285 -0.17897 580.669 -0.0906067 583.488 1.44434Z"
            fill="#F99D1D"
          />
          <path
            d="M691.781 60.4073L690.346 63.0421V63.0421L691.781 60.4073ZM583.488 1.44434L582.054 4.0791V4.0791L583.488 1.44434ZM696.999 123.834H693.999V123.859L693.999 123.884L696.999 123.834ZM681.867 243.344L683.407 240.769L681.867 243.344ZM593.335 190.392L591.796 192.967L593.335 190.392ZM583.521 190.138L584.925 192.789L583.521 190.138ZM470.551 249.985L469.146 247.334L470.551 249.985ZM461.395 250.091L460.052 252.774L461.395 250.091ZM341.007 189.856L342.349 187.173V187.173L341.007 189.856ZM331.691 190.049L330.239 187.424L330.239 187.424L331.691 190.049ZM224.532 249.335L225.984 251.96V251.96L224.532 249.335ZM213.876 248.765L215.602 246.312H215.602L213.876 248.765ZM120.37 189.705L121.746 187.039H121.746L120.37 189.705ZM111.622 189.672L110.274 186.991L111.622 189.672ZM15.1219 243.492L13.6065 240.903H13.6065L15.1219 243.492ZM0 149.641H3V149.62L2.99971 149.599L0 149.641ZM-0.000976562 149.5L-3.00098 149.5V149.5H-0.000976562ZM-0.000427246 69.1295L-3.00043 69.1295V69.1295L-0.000427246 69.1295ZM5.08746 60.4192L6.56109 63.0323L6.56111 63.0323L5.08746 60.4192ZM109.399 1.59358L110.873 4.2067V4.2067L109.399 1.59358ZM118.734 1.33536L117.408 4.02594V4.02594L118.734 1.33536ZM228.89 55.6617L227.563 58.3523L228.936 59.0293L230.29 58.3151L228.89 55.6617ZM331.955 1.29031L333.355 3.94372L333.355 3.94372L331.955 1.29031ZM340.765 1.03391L339.522 3.76423V3.76424L340.765 1.03391ZM456.43 53.6953L457.673 50.9649V50.9649L456.43 53.6953ZM464.891 53.6143L466.186 56.3203V56.3203L464.891 53.6143ZM574.389 1.20679L575.685 3.91282V3.91281L574.389 1.20679ZM693.215 57.7725L584.923 -1.19043L582.054 4.0791L690.346 63.0421L693.215 57.7725ZM699.999 69.1898C699.999 64.4291 697.396 60.0491 693.215 57.7725L690.346 63.0421C692.597 64.2679 693.999 66.6263 693.999 69.1898H699.999ZM699.999 123.834V69.1898H693.999V123.834H699.999ZM693.999 123.884C694 123.922 694 123.96 694 124H700C700 123.929 699.999 123.857 699.998 123.785L693.999 123.884ZM694 124V234.762H700V124H694ZM694 234.762C694 240.199 688.073 243.56 683.407 240.769L680.327 245.919C688.992 251.101 700 244.859 700 234.762H694ZM683.407 240.769L594.875 187.818L591.796 192.967L680.327 245.919L683.407 240.769ZM594.875 187.818C590.973 185.483 586.135 185.358 582.117 187.487L584.925 192.789C587.089 191.642 589.694 191.71 591.796 192.967L594.875 187.818ZM582.117 187.487L469.146 247.334L471.955 252.636L584.925 192.789L582.117 187.487ZM469.146 247.334C467.147 248.393 464.76 248.42 462.737 247.408L460.052 252.774C463.809 254.654 468.243 254.602 471.955 252.636L469.146 247.334ZM462.737 247.408L342.349 187.173L339.665 192.539L460.052 252.774L462.737 247.408ZM342.349 187.173C338.518 185.256 333.988 185.35 330.239 187.424L333.144 192.674C335.162 191.557 337.601 191.507 339.665 192.539L342.349 187.173ZM330.239 187.424L223.08 246.71L225.984 251.96L333.144 192.674L330.239 187.424ZM223.08 246.71C220.703 248.025 217.818 247.871 215.602 246.312L212.15 251.219C216.25 254.103 221.604 254.383 225.984 251.96L223.08 246.71ZM215.602 246.312C200.493 235.683 154.859 204.125 121.746 187.039L118.995 192.371C151.688 209.24 197.001 240.562 212.15 251.219L215.602 246.312ZM121.746 187.039C118.135 185.176 113.888 185.174 110.274 186.991L112.97 192.352C114.884 191.389 117.106 191.397 118.995 192.371L121.746 187.039ZM110.274 186.991C81.9333 201.241 36.8984 227.27 13.6065 240.903L16.6373 246.081C39.9569 232.432 84.8277 206.501 112.97 192.352L110.274 186.991ZM13.6065 240.903C8.91486 243.649 3 240.257 3 234.82H-3C-3 244.891 7.94464 251.169 16.6373 246.081L13.6065 240.903ZM3 234.82V149.641H-3V234.82H3ZM-3.00098 149.5C-3.00098 149.561 -3.00055 149.622 -2.99971 149.682L2.99971 149.599C2.99925 149.566 2.99902 149.533 2.99902 149.5H-3.00098ZM-3.00043 69.1295L-3.00098 149.5L2.99902 149.5L2.99957 69.1296L-3.00043 69.1295ZM3.61383 57.8061C-0.472648 60.1106 -3.00035 64.4381 -3.00043 69.1295L2.99957 69.1296C2.99962 66.6034 4.36071 64.2732 6.56109 63.0323L3.61383 57.8061ZM107.926 -1.01953L3.61382 57.8061L6.56111 63.0323L110.873 4.2067L107.926 -1.01953ZM120.061 -1.35523C116.209 -3.2551 111.667 -3.12946 107.926 -1.01953L110.873 4.2067C112.887 3.07059 115.333 3.00293 117.408 4.02594L120.061 -1.35523ZM230.217 52.9711L120.061 -1.35523L117.408 4.02594L227.563 58.3523L230.217 52.9711ZM330.555 -1.36309L227.491 53.0083L230.29 58.3151L333.355 3.94372L330.555 -1.36309ZM342.008 -1.69642C338.345 -3.36427 334.115 -3.24119 330.555 -1.36309L333.355 3.94372C335.272 2.93244 337.549 2.86617 339.522 3.76423L342.008 -1.69642ZM457.673 50.9649L342.008 -1.69643L339.522 3.76424L455.187 56.4256L457.673 50.9649ZM463.596 50.9082C461.727 51.8026 459.558 51.8233 457.673 50.9649L455.187 56.4256C458.688 58.0197 462.716 57.9812 466.186 56.3203L463.596 50.9082ZM573.094 -1.49924L463.596 50.9082L466.186 56.3203L575.685 3.91282L573.094 -1.49924ZM584.923 -1.19043C581.258 -3.18586 576.858 -3.30073 573.094 -1.49924L575.685 3.91281C577.711 2.94279 580.081 3.00464 582.054 4.0791L584.923 -1.19043Z"
            fill="black"
            mask="url(#path-1-inside-1_622_4693)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Radionice;
