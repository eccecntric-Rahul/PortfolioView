import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import "./MyCarousel.css"
const MyCarousel = (props) => {
  const {imgArr}=props
  const responsiveOptions = [
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
];
  return (
        <Carousel value={imgArr} containerClassName="carousel_customized" numVisible={1} numScroll={1} responsiveOptions={responsiveOptions}   className="custom-carousel" circular
             itemTemplate={ImageCard} showNavigators={false} circular
             autoplayInterval={3000} renderIndicator={()=><span>r</span>}/>
  )
}

const ImageCard=(card)=>{
    return (
           <img src={card} alt="Image" className="image_card" />  
        )
}

export default MyCarousel

