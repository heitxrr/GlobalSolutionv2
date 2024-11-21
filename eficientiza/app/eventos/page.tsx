'use client'

import { useState } from 'react';
import Image from 'next/image';

function DualCarousel() {
  const images = [
    '/images/logo-eficientiza-navbar.png',
    '/images/logo-eficientiza-navbar.png',
    '/images/logo-eficientiza-navbar.png',
    '/images/logo-eficientiza-navbar.png',
  ];

  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);

  const nextImage1 = () => {
    setCurrentIndex1((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage1 = () => {
    setCurrentIndex1((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextImage2 = () => {
    setCurrentIndex2((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage2 = () => {
    setCurrentIndex2((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <main className="flex flex-col items-center">
      <div className="carousel w-full flex justify-center items-center my-10">
        <button onClick={prevImage1} className="p-2">Anterior</button>
        <div className="flex">
          <Image src={images[currentIndex1]} alt="Event Image 1" width={300} height={300} />
          <Image src={images[(currentIndex1 + 1) % images.length]} alt="Event Image 2" width={300} height={300} />
        </div>
        <button onClick={nextImage1} className="p-2">Próximo</button>
      </div>
      <div className="carousel w-full flex justify-center items-center my-10">
        <button onClick={prevImage2} className="p-2">Anterior</button>
        <div className="flex">
          <Image src={images[currentIndex2]} alt="Event Image 3" width={300} height={300} />
          <Image src={images[(currentIndex2 + 1) % images.length]} alt="Event Image 4" width={300} height={300} />
        </div>
        <button onClick={nextImage2} className="p-2">Próximo</button>
      </div>
    </main>
  );
}

export default DualCarousel;