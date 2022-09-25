import React from "react";
import "../Partneri/Partneri.css";
import Slider from "react-slick";

import Adacta from "../../assets/adacta.png";
import DevIT from "../../assets/godisnji/devit.png";
import Digitec from "../../assets/godisnji/digitec.png";
import FON from "../../assets/godisnji/fon.png";
import Guarana from "../../assets/godisnji/guarana.png";
import Hedwell from "../../assets/godisnji/hedwell.png";
import Mainstream from "../../assets/godisnji/mainstream.png";
import Prime from "../../assets/godisnji/prime.png";
import { motion } from "framer-motion";

const Partneri = () => {
  const settingsPartneri = {
    infinite: true,
    lazyLoad: true,
    speed: 1000, //treba da bude isto kao u css transform
    // ovo gore menja duzinu trajanja anim
    slidesToShow: 4,
    autoplay: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    focusOnSelect: true,
    autoplaySpeed: 3000,
    draggable: true,
    arrows: false,
    swipeToSlide: false,
    responsive: [
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 3,
          arrows: false,
          swipeToSlide: true,
        },
      },
    ],
  };

  const godisnjiPartneri = [
    {
      logoPartnera: DevIT,
      linkPartnera: "https://www.devit.rs/",
    },
    {
      logoPartnera: Digitec,
      linkPartnera: "https://www.digitec.rs/reklamni_materijali",
    },
    {
      logoPartnera: FON,
      linkPartnera: "http://fon.bg.ac.rs/",
    },
    {
      logoPartnera: Guarana,
      linkPartnera: "https://knjaz.rs/portfolio/guarana/",
    },
    {
      logoPartnera: Hedwell,
      linkPartnera: "https://hedwell.com/",
    },
    {
      logoPartnera: Mainstream,
      linkPartnera: "https://www.mainstream.rs/",
    },
    {
      logoPartnera: Prime,
      linkPartnera: "https://www.primeholding.com/",
    },
  ];
  const logoPartneri2 = [
    DevIT,
    Digitec,
    FON,
    Guarana,
    Hedwell,
    Mainstream,
    Prime,
  ];
  // const logoPartneri3 = [
  //   DevIT,
  //   Digitec,
  //   FON,
  //   Guarana,
  //   Hedwell,
  //   Mainstream,
  //   Prime,
  // ];             OVI SU ZA MEDIJSKE

  return (
    <div className="Partneri" id="nasi-partneri">
      <div className="Partneri-svi">
        {/* <div className="Pokrovitelji-panel">
          <p
            className="Partneri-text"
            style={
              {
                // fontSize: "1.2rem",
                // letterSpacing: "-0.5px",
                // position: "absolute"
              }
            }
          >
            POKROVITELJ PANEL DISKUSIJE
          </p>
          <motion.div
            className="Pokrovitelj-hex"
            whileInView={{ scale: 1.15 }}
            initial={{}}
            // transition={{ duraton: 1, delay: 0.3, ease: "easeInOut" }}
            transition={{
              type: "spring",
              stiffness: 200,
              mass: 3.9,
              damping: 9,
              delay: "0.2",
            }}
          >
            <img src={Adacta}></img>
          </motion.div>

        </div> */}
        <div className="Godisnji-partneri slider-partneri">
          <p className="Partneri-text">GODIŠNJI PARTNERI</p>
          <Slider {...settingsPartneri} className="SliderCeo">
            {godisnjiPartneri.map((img) => (
              <div className="Jedan-partner">
                <a href={img.linkPartnera}>
                  <img
                    className="Jedan-partner-slika"
                    src={img.logoPartnera}
                    alt={"Gosisnji partneri projekta Studenti Studentima"}
                  ></img>
                </a>
              </div>
            ))}
          </Slider>
        </div>
        <div className="Naturalni-partneri slider-partneri">
          <p className="Partneri-text">NATURALNI I ROBNI PARTNERI</p>

          <Slider {...settingsPartneri} className="SliderCeo">
            {logoPartneri2.map((img) => (
              <div className="Jedan-partner">
                <img
                  className="Jedan-partner-slika"
                  src={img}
                  alt={
                    "Naturalni i robni partneri projekta Studenti Studentima"
                  }
                ></img>
              </div>
            ))}
          </Slider>
        </div>
        {/* <div className="Medijski-partneri slider-partneri">
          <p className="Partneri-text">MEDIJSKI PARTNERI</p>
          <Slider {...settingsPartneri} className="SliderCeo">
            {logoPartneri3.map((img) => (
              <div className="Jedan-partner">
                <img
                  className="Jedan-partner-slika"
                  src={img}
                  alt={"menjaj"}
                ></img>
              </div>
            ))}
          </Slider>
        </div> */}
      </div>
    </div>
  );
};

export default Partneri;
