import React from 'react'
import "../Loader/Loader.css";
const Loader = () => {
  return (
    <div className='Ceo-loader'><div class="hexagon-loader">
    <div class="hexagon-loader__top-container">
      <div class="pulsing-hexagon__background pulsing-hexagon--hexagon-1">
        <div class="pulsing-hexagon pulsing-hexagon--hexagon-1"></div>
      </div>
      <div class="pulsing-hexagon__background pulsing-hexagon--hexagon-2">
        <div class="pulsing-hexagon pulsing-hexagon--hexagon-2"></div>
      </div>
    </div>
    <div class="hexagon-loader__bottom-container">
      <div class="pulsing-hexagon__background pulsing-hexagon--hexagon-3">
        <div class="pulsing-hexagon pulsing-hexagon--hexagon-3"></div>
      </div>   
    </div>
    <div class="spinning-circle"></div>
  </div></div>
  )
}

export default Loader