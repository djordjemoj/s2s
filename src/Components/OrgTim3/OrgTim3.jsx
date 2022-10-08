import "../OrgTim3/OrgTim3.css";
import { useState } from "react";
import Slider from "react-slick";


import SlikaTim0 from "../../assets/slikeTimova/tim0.jpg";
import SlikaTim1 from "../../assets/slikeTimova/tim1.jpg";
import SlikaTim2 from "../../assets/slikeTimova/tim2.JPG";
import SlikaTim3 from "../../assets/slikeTimova/tim3.jpg";
import SlikaTim4 from "../../assets/slikeTimova/tim4.jpg";
import SlikaTim5 from "../../assets/slikeTimova/tim5.jpg"; //PNG JE UMESTO JPG
import SlikaTim6 from "../../assets/slikeTimova/tim6.jpg";
import SlikaTim7 from "../../assets/slikeTimova/tim7.jpg";
import Koordinator0 from "../../assets/slikeKoordinatora/koord0.jpg";
import Koordinator1 from "../../assets/slikeKoordinatora/koord1.jpg";
import Koordinator2 from "../../assets/slikeKoordinatora/koord2.jpg";
import Koordinator3 from "../../assets/slikeKoordinatora/koord3.jpg";
import Koordinator4 from "../../assets/slikeKoordinatora/koord4.jpg";
import Koordinator5 from "../../assets/slikeKoordinatora/koord5.jpg";
import Koordinator6 from "../../assets/slikeKoordinatora/koord6.jpg";
import Koordinator7 from "../../assets/slikeKoordinatora/koord7.jpg";
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Orgtim3 = () => {
  const images = [
    SlikaTim0,
    SlikaTim1,
    SlikaTim2,
    SlikaTim3,
    SlikaTim4,
    SlikaTim5,
    SlikaTim6,
    SlikaTim7,
  ];
  const koordinatori = [
    Koordinator0,
    Koordinator1,
    Koordinator2,
    Koordinator3,
    Koordinator4,
    Koordinator5,
    Koordinator6,
    Koordinator7,
  ];
  const koordinatioriImena = [
    "KOSTA AĆIMOVIĆ",
    "SOFIJA CVETINOVIĆ",
    "ĐORĐE MOJSIĆ",
    "SARA GAVRANOVIĆ",
    "DARKO KOLARIĆ",
    "KRISTINA JOVANOVIĆ",
    "MIHAILO BUKARA",
    "NEVENA CVIJOVIĆ",
  ];
  const koordinatioriPozicija = [
    "KOORDINATOR",
    "KOORDINATORKA ",
    "KOORDINATOR TIMA ZA",
    "KOORDINATORKA TIMA",
    "KOORDINATOR TIMA",
    "KOORDINATORKA TIMA ZA",
    "KOORDINATOR",
    "KOORDINATORKA TIMA",
  ];

  const koordinatioriPozicija2 = [
    "PROJEKTA",
    "DIZAJN TIMA",
    "INFORMACIONE TEHNOLOGIJE",
    "ZA ODNOSE SA JAVNOŠĆU",
    "ZA LOGISTIKU",
    "KORPORATIVNE ODNOSE",
    "PROGRAM TIMA",
    "ZA LJUDSKE RESURSE",
  ];
  const citati = [
    "Normalno da moj plan radi, ipak sam ja savršen",
    "Radite li vi nešto osim što čekate da vam ja šaljem dizajn???!!!",
    "Krajnji neprofesionalizam, stavili ste me u ⬣ doviđenja!",
    "Nikad bolja PRomocija",
    "Pet a cat when u encounter one on the street",
    "Imaćeš pare, ne brini Kosta",
    "Ee do kad je rok?",
    "Šefica sam jednog HaRema",
  ];


  const [imageIndex, setImageIndex] = useState(0);
  const [koorIndex, setKoorIndex] = useState(0);
  const [koorIme, setKoorIme] = useState(0);
  const [koorPozicija, setKoorPozicija] = useState(0);
  const [koorPozicija2, setKoorPozicija2] = useState(0);
  const [citat, setCitat] = useState(0);

  //   moze da se stavi on swipe da prekine da se vrti samo, ili pause on focuss, PAUSE ON HOVER STAVITI NA PARTNERE

  const settings = {
    infinite: true,
    lazyLoad: true,
    //  fade: true,
    speed: 1000, //treba da bude isto kao u css transform
    // ovo gore menja duzinu trajanja anim
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
    swipeToSlide: false,
    autoplay: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    focusOnSelect: true,
    autoplaySpeed: 3000,
    arrows: false,

    beforeChange: (_current, next) => promeniObe(next),
    responsive: [
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          swipeToSlide: true,

          arrows: false,
        },
      },
    ],
  };
  function promeniObe(next) {
    setImageIndex(next);
    setKoorIndex(next);
    setKoorIme(next);
    setKoorPozicija(next);
    setKoorPozicija2(next);
    setCitat(next);
    // alert("sao");
  }

  return (
    <div className="orgtim-container" id="tim">
      <div className="OrgTim3">
        <div className="Orgtim-naslov Partneri-text">
          <h1>ORGANIZACIONI TIM</h1>
        </div>
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div className={idx === imageIndex ? "slide activeSlide" : "slide"} >
              <img
                src={img}
                alt={img}
                style={{
                  clipPath:
                    "polygon(75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%, 25% 0)",
                  WebkitClipPath:
                    "polygon(75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%, 25% 0)",
                }}
              ></img>
              
            </div>
          ))}
        </Slider>

        <div className="Koor-container"></div>

        <div
          className="Koor-slika"
          id="kontakt"
          style={{
            clipPath:
              "polygon(75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%, 25% 0)",
            WebkitClipPath:
              "polygon(75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%, 25% 0)",
          }}
        >
          <img
            src={koordinatori[koorIndex]}
            alt={"koordinator"}
            style={{
              clipPath:
                "polygon(75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%, 25% 0)",
              WebkitClipPath:
                "polygon(75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%, 25% 0)",
            }}
          ></img>
            <div className="CitatKoor" style={{
                clipPath:
                  "polygon(75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%, 25% 0)",
                WebkitClipPath:
                  "polygon(75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%, 25% 0)",
              }} >
              <p>{citati[citat]}</p>
            </div>
        </div>
        <div className="Koor-info">
          <svg viewBox="0 0 618 156" fill="none">
            <path
              d="M2.5 2.5H510.013L612.894 75.7191L509.977 153.15H2.5V2.5Z"
              fill="#F9CA87"
              stroke="black"
              stroke-width="5"
            />
            <line
              x1="279.799"
              y1="139.481"
              x2="503.376"
              y2="139.481"
              stroke="black"
              stroke-width="3"
            />
            <line
              y1="-1.5"
              x2="107.517"
              y2="-1.5"
              transform="matrix(0.834084 0.551637 -0.834084 0.551637 490.302 12.2236)"
              stroke="black"
              stroke-width="3"
            />
            <text
              className="Koor-ime"
              x="50%"
              y="20%"
              fill="white"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="150%"
              // stroke="gray"
              strokeWidth="1"
            >
              {koordinatioriImena[koorIme]}
            </text>
            <text
              className="Koor-pozicija"
              x="50%"
              y="45%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="130%"
            >
              {koordinatioriPozicija[koorPozicija]}
            </text>
            <text
              className="Koor-pozicija"
              x="50%"
              y="65%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="130%"
            >
              {koordinatioriPozicija2[koorPozicija2]}
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Orgtim3;
