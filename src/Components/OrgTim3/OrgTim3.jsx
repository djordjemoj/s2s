import "../OrgTim3/OrgTim3.css"
import { useState} from "react";
import Slider from "react-slick";
import SlikaTim0 from "../../assets/tim0.jpg"
import SlikaTim1 from "../../assets/tim1.jpg"
import SlikaTim2 from "../../assets/tim0.jpg"
import SlikaTim3 from "../../assets/tim0.jpg"
import SlikaTim4 from "../../assets/tim0.jpg"
import SlikaTim5 from "../../assets/tim5.png"//PNG JE UMESTO JPG
import SlikaTim6 from "../../assets/tim0.jpg"
import SlikaTim7 from "../../assets/tim0.jpg"
import Koordinator0 from "../../assets/tim0.jpg"
import Koordinator1 from "../../assets/koord1.jpg"
import Koordinator2 from "../../assets/tim0.jpg"
import Koordinator3 from "../../assets/tim0.jpg"
import Koordinator4 from "../../assets/tim0.jpg"
import Koordinator5 from "../../assets/tim0.jpg"
import Koordinator6 from "../../assets/tim0.jpg"
import Koordinator7 from "../../assets/tim0.jpg"
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";



const Orgtim3 = () => {
    
    const images = [SlikaTim0, SlikaTim1, SlikaTim2, SlikaTim3, SlikaTim4, SlikaTim5, SlikaTim6, SlikaTim7];
    const koordinatori = [Koordinator0, Koordinator1, Koordinator2, Koordinator3, Koordinator4, Koordinator5, Koordinator6, Koordinator7];
    const koordinatioriImena =["KOSTA AĆIMOVIĆ", "SOFIJA CVETINOVIĆ","ĐORĐE MOJSIĆ","SARA GAVRANOVIĆ","DARKO KOLARIĆ", "KRISTINA JOVANOVIĆ","MIHAILO BUKARA","NEVENA CVIJOVIĆ"];
    const koordinatioriPozicija =[
     "KOORDINATOR",
     "KOORDINATORKA ",
     "KOORDINATOR TIMA ZA",
     "KOORDINATORKA TIMA",
     "KOORDINATOR TIMA",
     "KOORDINATORKA TIMA",
     "KOORDINATOR",
     "KOORDINATORKA TIMA"
    ];

    const koordinatioriPozicija2=[
        "PROJEKTA",
        "DIZAJN TIMA",
        "INFORMACIONE TEHNOLOGIJE",
        "ZA ODNOSE SA JAVNOŠĆU",
        "ZA LOGISTIKU",
        "KORPORATIVNE ODNOSE",
        "PROGRAM TIMA",
        "ZA LJUDSKE RESURSE"
       ];

    
      const [imageIndex, setImageIndex] = useState(0);
      const [koorIndex, setKoorIndex] = useState(0);
      const [koorIme, setKoorIme] = useState(0);
      const [koorPozicija, setKoorPozicija] = useState(0);
      const [koorPozicija2, setKoorPozicija2] = useState(0);

      
    //   moze da se stavi on swipe da prekine da se vrti samo, ili pause on focuss, PAUSE ON HOVER STAVITI NA PARTNERE
    
      const settings = {
        infinite: true,
        // lazyLoad: true,
        speed: 1000,//treba da bude isto kao u css transform
        // ovo gore menja duzinu trajanja anim
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        
        swipeToSlide: true,
        autoplay: true,
        pauseOnHover: true,
        pauseOnFocus: true,
        focusOnSelect: false,
    autoplaySpeed: 3000,
    arrows: false,
        
        beforeChange: (_current, next) => promeniObe(next),
        responsive: [
              {
                breakpoint: 620,
                settings: {
                  slidesToShow: 1,
                  
                  arrows: false,
                }
              }
          ]
    
      };
      function promeniObe(next){
         setImageIndex(next);
        setKoorIndex(next);
        setKoorIme(next);
        setKoorPozicija(next);
        setKoorPozicija2(next);
        // alert("sao");
      };


  return (
    <div className="orgtim-container">
    <div className="OrgTim3">
    <Slider {...settings}>
      {images.map((img, idx) => (
        <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
          <img src={img} alt={img} 
                      style={{ clipPath: 'polygon(75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%, 25% 0)', WebkitClipPath: 'polygon(75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%, 25% 0)'}}></img>
          
        </div>
      ))}
    </Slider>

    <div className="Koor-container">
    
    
    </div>

        <div className="Koor-slika" style={{ clipPath: 'polygon(75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%, 25% 0)', WebkitClipPath: 'polygon(75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%, 25% 0)'}}>

        <img src={koordinatori[koorIndex]} alt={"koordinator"}  
                      style={{ clipPath: 'polygon(75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%, 25% 0)', WebkitClipPath: 'polygon(75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%, 25% 0)'}}></img>
          
        </div>
        <div className="Koor-info">

        <svg  viewBox="0 0 618 156" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 2.5H510.013L612.894 75.7191L509.977 153.15H2.5V2.5Z" fill="#F9CA87" stroke="black" stroke-width="5"/>
<line x1="279.799" y1="139.481" x2="503.376" y2="139.481" stroke="black" stroke-width="3"/>
<line y1="-1.5" x2="107.517" y2="-1.5" transform="matrix(0.834084 0.551637 -0.834084 0.551637 490.302 12.2236)" stroke="black" stroke-width="3"/>
<text className="Koor-ime" x="50%" y ="20%" fill = "white" textAnchor="middle" dominantBaseline="middle"  fontSize="150%" stroke="" >{koordinatioriImena[koorIme]}</text>
<text className="Koor-pozicija" x="50%" y ="45%" textAnchor="middle" dominantBaseline="middle" fontSize="130%" >{koordinatioriPozicija[koorPozicija]}</text>
<text className="Koor-pozicija" x="50%" y ="65%" textAnchor="middle" dominantBaseline="middle" fontSize="130%" >{koordinatioriPozicija2[koorPozicija2]}</text>

</svg>






    </div>

  </div>
  </div>
  )
}

export default Orgtim3