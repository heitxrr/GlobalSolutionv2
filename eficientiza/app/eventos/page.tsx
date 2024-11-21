'use client'

import { useState } from 'react';
import Image from 'next/image';

function EventPage() {
  const images = [
    '/images/logo-eficientiza-navbar.png',
    '/images/logo-eficientiza-navbar.png',
    '/images/logo-eficientiza-navbar.png',
    '/images/logo-eficientiza-navbar.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <main className="flex flex-col items-center">
      <div className="carousel w-full flex justify-center items-center my-10">
        <button onClick={prevImage} className="p-2">Anterior</button>
        <div className="flex">
          <Image src={images[currentIndex]} alt="Event Image 1" width={300} height={300} />
          <Image src={images[(currentIndex + 1) % images.length]} alt="Event Image 2" width={300} height={300} />
        </div>
        <button onClick={nextImage} className="p-2">Próximo</button>
      </div>
    </main>
  );
}

export default EventPage;
