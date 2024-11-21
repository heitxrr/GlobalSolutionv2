'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
import Rodape from '@/components/Rodape/Rodape'; 

function DualCarousel() {
  const cards = [
    { title: 'Distribuição de sementes', link: '/page1', image: '/images/teste/energia-hidreletrica.jpg' },
    { title: 'Distribuição de sementes', link: '/page2', image: '/images/teste/energia-solar.jpg' },
    { title: 'Distribuição de sementes', link: '/page3', image: '/images/logo-eficientiza-navbar.png' },
    { title: 'Distribuição de sementes', link: '/page4', image: '/images/teste/energia-eolica.jpg' },
  ];

  return (
    <>
      <h1 className="text-2xl font-bold mb-6 text-center">Confira eventos em sua região</h1>
      <div className="w-full mb-6 ">
        <h2 className="text-xl font-semibold mb-4 text-center">Próxima semana</h2>
        <Swiper spaceBetween={30} slidesPerView={1} breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }} navigation={true} modules={[Navigation]} className="w-full">
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <Link href={card.link}>
                <div className="relative flex flex-col items-center justify-center bg-background rounded-lg overflow-hidden">
                  <div
                    className="w-full h-40 bg-cover bg-center"
                    style={{ backgroundImage: `url(${card.image})` }}
                  />
                  <div className="absolute inset-0 bg-green-500 opacity-40"></div>
                  <div className="absolute top-1/2 transform -translate-y-1/2 z-10 text-center text-white font-semibold text-lg">
                    {card.title}
                  </div>
                  <div className="absolute inset-y-0 right-0 w-4 bg-green-500"></div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-full mb-6">
        <h2 className="text-xl font-semibold mb-4 text-center">Próximo mês</h2>
        <Swiper spaceBetween={30} slidesPerView={1} breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }} navigation={true} modules={[Navigation]} className="w-full">
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <Link href={card.link}>
                <div className="relative flex flex-col items-center justify-center bg-background rounded-lg overflow-hidden">
                  <div
                    className="w-full h-40 bg-cover bg-center"
                    style={{ backgroundImage: `url(${card.image})` }}
                  />
                  <div className="absolute inset-0 bg-green-500 opacity-40"></div>
                  <div className="absolute top-1/2 transform -translate-y-1/2 z-10 text-center text-white font-semibold text-lg">
                    {card.title}
                  </div>
                  <div className="absolute inset-y-0 right-0 w-4 bg-green-500"></div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Rodape />
    </>
  );
}

export default DualCarousel;
