import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';




const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const moveDot = index => {
    setCurrent(index)
}

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={slide.id}
          >
            {index === current && (
              // eslint-disable-next-line jsx-a11y/img-redundant-alt
              <img src={slide.image} alt={slide.title} className='image' />
              
            )}
            < p className='slide-description'>{slide.title}</p> 
            <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={current === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;