import React from "react";
import "../Partneri/Partneri.css";
import Slider from "react-slick";
import Adacta from "../../assets/adacta.png";
import DragiBravo from "../../assets/dragibravo.jpeg";
import SlikaTim1 from "../../assets/glassart.png";
import SlikaTim2 from "../../assets/adacta.png";
import SlikaTim3 from "../../assets/adacta.png";
import SlikaTim4 from "../../assets/adacta.png";
import SlikaTim5 from "../../assets/adacta.png";
import SlikaTim6 from "../../assets/adacta.png";
import SlikaTim7 from "../../assets/adacta.png";
import { motion } from "framer-motion";

const Partneri = () => {
  const settingsPartneri = {
    infinite: true,
    // lazyLoad: true,
    speed: 1000, //treba da bude isto kao u css transform
    // ovo gore menja duzinu trajanja anim
    slidesToShow: 4,
    autoplay: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    focusOnSelect: true,
    autoplaySpeed: 3000,
    draggable: true,
    arrows: true,
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
      logoPartnera: DragiBravo,
      linkPartnera: "https://www.instagram.com/dragibravo/",
    },
    {
      logoPartnera: DragiBravo,
      linkPartnera: "https://www.instagram.com/dragibravo/",
    },
    {
      logoPartnera: DragiBravo,
      linkPartnera: "https://www.instagram.com/dragibravo/",
    },
    {
      logoPartnera: DragiBravo,
      linkPartnera: "https://www.instagram.com/dragibravo/",
    },
    {
      logoPartnera: DragiBravo,
      linkPartnera: "https://www.instagram.com/dragibravo/",
    },

    // DragiBravo,
    // DragiBravo,
    // SlikaTim2,
    // SlikaTim3,
    // SlikaTim4,
    // SlikaTim5,
    // SlikaTim6,
    // SlikaTim7,
  ];
  const logoPartneri2 = [
    DragiBravo,
    SlikaTim1,
    SlikaTim2,
    SlikaTim3,
    SlikaTim4,
    SlikaTim5,
    SlikaTim6,
    SlikaTim7,
  ];
  const logoPartneri3 = [
    DragiBravo,
    SlikaTim1,
    SlikaTim2,
    SlikaTim3,
    SlikaTim4,
    SlikaTim5,
    SlikaTim6,
    SlikaTim7,
  ];

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
            <img src={Adacta}></img>
          </motion.div>
          {/* <svg
            viewBox="0 0 782 430"
            fill="none"
           
          >
            <path
              d="M721.118 279.707L584.657 228.265C583.683 227.898 583.038 226.966 583.038 225.925L583.038 122.418C583.038 121.377 583.683 120.446 584.657 120.079L721.118 68.6361C722.753 68.0198 724.5 69.2281 724.5 70.9754L724.5 277.368C724.5 279.115 722.753 280.324 721.118 279.707Z"
              fill="#00CBEF"
              stroke="black"
              stroke-width="5"
            />
            <path
              d="M60.8819 68.6356L197.343 120.078C198.317 120.445 198.962 121.377 198.962 122.417L198.962 225.925C198.962 226.965 198.317 227.897 197.343 228.264L60.8818 279.707C59.2468 280.323 57.5 279.115 57.5 277.367L57.5 70.9749C57.5 69.2276 59.2468 68.0193 60.8819 68.6356Z"
              fill="#00CBEF"
              stroke="black"
              stroke-width="5"
            />
            <path
              d="M695.872 296.163L570.375 237.067C569.5 236.654 568.941 235.773 568.941 234.805L568.941 113.538C568.941 112.57 569.5 111.689 570.375 111.276L695.872 52.1796C697.53 51.3988 699.437 52.6086 699.437 54.4414L699.437 293.902C699.437 295.734 697.53 296.944 695.872 296.163Z"
              fill="#00CBEF"
              stroke="black"
              stroke-width="5"
            />
            <path
              d="M86.1281 52.1794L211.625 111.276C212.5 111.689 213.059 112.57 213.059 113.538L213.059 234.805C213.059 235.773 212.5 236.654 211.625 237.067L86.1281 296.163C84.4699 296.944 82.563 295.734 82.563 293.901L82.563 54.4412C82.563 52.6084 84.4699 51.3986 86.1281 52.1794Z"
              fill="#00CBEF"
              stroke="black"
              stroke-width="5"
            />
            <path
              d="M119.289 29.432L229.904 98.9809C230.632 99.4384 231.073 100.238 231.073 101.097L231.073 247.245C231.073 248.105 230.632 248.904 229.904 249.361L119.289 318.91C117.624 319.957 115.458 318.76 115.458 316.794L115.458 31.5484C115.458 29.5818 117.624 28.3852 119.289 29.432Z"
              fill="#00CBEF"
              stroke="black"
              stroke-width="5"
            />
            <path
              d="M145.386 3.60566L245.036 85.0212C245.618 85.496 245.955 86.2068 245.955 86.9572V261.385C245.955 262.136 245.618 262.847 245.036 263.322L145.386 344.737C143.753 346.071 141.304 344.909 141.304 342.801L141.304 5.54166C141.304 3.43342 143.753 2.27178 145.386 3.60566Z"
              fill="#00CBEF"
              stroke="black"
              stroke-width="5"
            />
            <path
              d="M662.711 318.911L552.096 249.362C551.368 248.904 550.927 248.105 550.927 247.245L550.927 101.098C550.927 100.238 551.368 99.4389 552.096 98.9813L662.711 29.4325C664.376 28.3857 666.542 29.5823 666.542 31.5489L666.542 316.794C666.542 318.761 664.376 319.958 662.711 318.911Z"
              fill="#00CBEF"
              stroke="black"
              stroke-width="5"
            />
            <path
              d="M636.614 344.737L536.964 263.322C536.383 262.847 536.045 262.136 536.045 261.386L536.045 86.9573C536.045 86.2068 536.383 85.4961 536.964 85.0213L636.614 3.60574C638.247 2.27188 640.696 3.4335 640.696 5.54175L640.696 342.801C640.696 344.909 638.247 346.071 636.614 344.737Z"
              fill="#00CBEF"
              stroke="black"
              stroke-width="5"
            />
          </svg> */}
        </div>
        <div className="Godisnji-partneri slider-partneri">
          <p className="Partneri-text">GODIŠNJI PARTNERI</p>
          <Slider {...settingsPartneri} className="SliderCeo">
            {godisnjiPartneri.map((img) => (
              <div className="Jedan-partner">
                <a href={img.linkPartnera}>
                  <img
                    className="Jedan-partner-slika"
                    src={img.logoPartnera}
                    alt={"menjaj"}
                  ></img>
                </a>
              </div>
            ))}
          </Slider>
        </div>
        <div className="Naturalni-partneri slider-partneri">
          <p className="Partneri-text">NARUTALNI I ROBNI PARTNERI</p>

          <Slider {...settingsPartneri} className="SliderCeo">
            {logoPartneri2.map((img) => (
              <div className="Jedan-partner">
                <img
                  className="Jedan-partner-slika"
                  src={img}
                  alt={"menjaj"}
                ></img>
              </div>
            ))}
          </Slider>
        </div>
        <div className="Medijski-partneri slider-partneri">
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
          {/* <p className="Partneri-text orgtim-naslov">ORGANIZACIONI TIM</p> */}
        </div>
      </div>
    </div>
  );
};

export default Partneri;
