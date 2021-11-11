/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import './App.css';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

export default  function BtnSlider({direction, moveSlide}){
console.log(direction,moveSlide);
return(
<button
onClick={moveSlide}
className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
>
<img src={direction === "next" ? FaArrowAltCircleRight: FaArrowAltCircleLeft} />

</button>
);

}