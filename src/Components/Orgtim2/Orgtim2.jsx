import "../Orgtim2/Orgtim2.css"
import { useState } from "react";
import Slider from "react-slick";
import SlikaTim0 from "../../assets/Panda.jpg"
import SlikaTim1 from "../../assets/tim1.jpg"
import SlikaTim2 from "../../assets/tim2.jpg"
import SlikaTim3 from "../../assets/tim3.jpg"
import SlikaTim4 from "../../assets/tim4.jpg"
import SlikaTim5 from "../../assets/tim5.jpg"
import SlikaTim6 from "../../assets/tim6.jpg"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";



const Orgtim2 = () => {
    // const inputRef = React.useRef(null);
    // useEffect(() => {
    //     // call api or anything
    //     inputRef.current.click();

    //  });
    const images = [SlikaTim0, SlikaTim1, SlikaTim2, SlikaTim3];

    const NextArrow = ({ onClick }) => {
        return (
          <div className="arrow next" onClick={onClick}>
            <FaArrowRight />
          </div>
        );
      };
    
      const PrevArrow = ({ onClick }) => {
        return (
          <div className="arrow prev" onClick={onClick}>
            <FaArrowLeft />
          </div>
        );
      };
    
      const [imageIndex, setImageIndex] = useState(0);
    
      const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 10,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
      };

  return (
    <div className="Orgtim2">
    <Slider {...settings}>
      {images.map((img, idx) => (
        <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
          <img src={img} alt={img} 
                      style={{ clipPath: 'polygon(75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%, 25% 0)', WebkitClipPath: 'polygon(75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%, 25% 0)'}}></img>
          
        </div>
      ))}
    </Slider>
  </div>
  )
}

export default Orgtim2