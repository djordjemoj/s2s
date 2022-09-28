import React from "react";
import "../Partneri/Partneri.css";
import Slider from "react-slick";

import DragiBravo from "../../assets/partneriLogo/dragibravo.jpeg";
import LogoPartner1 from "../../assets/partneriLogo/glassart.png";
import LogoPartner2 from "../../assets/partneriLogo/beerpong.png";
import LogoPartner3 from "../../assets/partneriLogo/danza.png";
import LogoPartner4 from "../../assets/partneriLogo/drbrado.png";
import LogoPartner5 from "../../assets/partneriLogo/futrola.png";
import LogoPartner6 from "../../assets/partneriLogo/Gifty.png";
import LogoPartner7 from "../../assets/partneriLogo/naucidizajn.jpg";
import LogoPartner8 from "../../assets/partneriLogo/kolacic.png";

import DevIT from "../../assets/godisnji/devit.png";
import Digitec from "../../assets/godisnji/digitec.png";
import FON from "../../assets/godisnji/fon.png";
import Guarana from "../../assets/godisnji/guarana.png";
import Hedwell from "../../assets/godisnji/hedwell.png";
import Mainstream from "../../assets/godisnji/mainstream.png";
import Prime from "../../assets/godisnji/prime.png";
import CatenaMedia from "../../assets/godisnji/catenamedia.png";

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
    {
      logoPartnera: CatenaMedia,
      linkPartnera: "https://www.catenamedia.com/",
    },
  ];
  const logoPartneri2 = [
    {
      logoPartnera: DragiBravo,
      linkPartnera: "https://www.instagram.com/dragibravo/",
    },
    {
      logoPartnera: LogoPartner1,
      linkPartnera: "https://www.instagram.com/glassart.srbija/",
    },
    {
      logoPartnera: LogoPartner2,
      linkPartnera: "http://www.facebook.com/beerpongbarbelgrade/",
    },
    {
      logoPartnera: LogoPartner3,
      linkPartnera: "https://www.instagram.com/danzadelarte/?hl=en",
    },
    {
      logoPartnera: LogoPartner4,
      linkPartnera: "https://brados.rs/",
    },
    {
      logoPartnera: LogoPartner5,
      linkPartnera: "https://www.instagram.com/la_futrola/",
    },
    {
      logoPartnera: LogoPartner6,
      linkPartnera: "https://gifty.rs/",
    },
    {
      logoPartnera: LogoPartner7,
      linkPartnera: "https://www.instagram.com/naucidizajn/",
    },
    {
      logoPartnera: LogoPartner8,
      linkPartnera: "http://www.kolacicsrece.com/",
    },
  ];
  // const logoPartneri3 = [
  //   DragiBravo,
  //   SlikaTim1,
  //   SlikaTim2,
  //   SlikaTim3,
  //   SlikaTim4,
  //   SlikaTim5,
  //   SlikaTim6,
  //   SlikaTim7,
  // ];             OVI SU ZA MEDIJSKE

  return (
    <div className="Partneri" id="nasi-partneri">
      <div className="Partneri-svi">
        <div className="Pokrovitelji-panel">
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
            <img src={Guarana}></img>
          </motion.div>
        </div>
        <div className="Godisnji-partneri slider-partneri">
          <p className="Partneri-text">GODIŠNJI PARTNERI</p>
          <Slider {...settingsPartneri} className="SliderCeo">
            {godisnjiPartneri.map((img) => (
              <div className="Jedan-partner">
                <a href={img.linkPartnera} target="_blank">
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
                <a href={img.linkPartnera} target="_blank">
                  <img
                    className="Jedan-partner-slika"
                    src={img.logoPartnera}
                    alt={
                      "Naturalni i robni partneri projekta Studenti Studentima"
                    }
                  ></img>
                </a>
              </div>
            ))}
          </Slider>
        </div>
        {/* <div className="Medijski-partneri slider-partneri">
          <p className="Partneri-text">MEDIJSKI PARTNERI</p>
          <Slider {...settingsPartneri} className="SliderCeo">
            {logoPartneri3.map((img) => (
              <div className="Jedan-partner">
              <a href={img.linkPartnera} target="_blank">
                <img
                  className="Jedan-partner-slika"
                  src={img}
                  alt={"menjaj"}
                ></img>
                </a>
              </div>
            ))}
          </Slider>
        </div> */}
      </div>
    </div>
  );
};

export default Partneri;
