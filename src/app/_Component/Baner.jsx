'use client';

import React, { useState } from 'react';
import Image from 'next/image';

function Baner() {
  const slides = [
    {
      src: 'https://kingsresearch.b-cdn.net/assets/Slider-03.webp',
      alt: 'Slider 1',
      caption:
        'Make accurate impactful decisions based on our smart, relevant, customized, and focused market research reports.',
    },
    {
      src: 'https://kingsresearch.b-cdn.net/assets/Slider-01.webp',
      alt: 'Slider 2',
      caption:
        'Unlock the potential of strategic insights for growth and success with our tailored market research.',
    },
    {
      src: 'https://kingsresearch.b-cdn.net/assets/Slider-02.webp',
      alt: 'Slider 3',
      caption:
        'Empower your business decisions with high-quality research and in-depth market analysis.',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[480px] sm:h-[300px]  overflow-hidden">

      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 relative h-[450px] sm:h-[300px] sm:w-full ">
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority
            />
        
            <div className="absolute bottom-6 left-10 sm:left-4 bg-black bg-opacity-50 text-white p-4 sm:p-2 rounded-lg max-w-lg sm:max-w-full">
              <p className="text-lg sm:text-sm mb-2">{slide.caption}</p>
              <button className="bg-red-600 text-white py-2 px-4 sm:py-1 sm:px-2 rounded-lg text-sm">
                Start Your Research
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-5 sm:left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 sm:p-2 rounded-full hover:bg-opacity-75 text-4xl sm:text-2xl"
        onClick={handlePrev}
      >
        &#8249;
      </button>
      <button
        className="absolute top-1/2 right-5 sm:right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 sm:p-2 rounded-full hover:bg-opacity-75 text-4xl sm:text-2xl"
        onClick={handleNext}
      >
        &#8250;
      </button>
    </div>
  );
}

export default Baner;
