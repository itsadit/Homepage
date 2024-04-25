import React, { useState } from 'react';
import path from './hero.png';
import path2 from './download.png'
import path3 from './download.jpeg'

const images = [
    { src: path, alt: 'Image 1' },
    { src: path2, alt: 'Image 2' },
    { src: path3, alt: 'Image 3' },
  ];
const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };
    // Replace with the correct image URL from VectorStock or another source// Placeholder
    return (
        <div className="relative mx-auto overflow-hidden w-full max-w-2xl">
      <div className="flex transition duration-700 ease-in-out">
        {images.map((image, index) => (
          <img
            key={image.src} // Important for accessibility
            className={`block object-cover h-80 w-full ${
              index === currentSlide ? '' : 'hidden'
            }`}
            src={image.src}
            alt={image.alt}
          />
        ))}
      </div>
      <div className="absolute flex  justify-between items-center top-1/2 -translate-y-1/2 px-4">
        <button type="button" className="text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white absolute left-4" onClick={prevSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7-1.41-1.41L6 12l8.41 8.41z" />
          </svg>
        </button>
        <button type="button" className=" text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white absolute left-80" onClick={nextSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7 1.41 1.41L18 12l-8.41-8.41z" />
          </svg>
        </button>
      </div>
    </div>
    );
};

export default Hero;
