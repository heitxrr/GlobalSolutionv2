import React from 'react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { StaticImageData } from 'next/image';

interface CarouselProps {
  images: { src: StaticImageData; alt: string }[];
}

const Carousel = ({ images }: CarouselProps) => {
  return (
    <div className="relative w-full">
      <Swiper
        className="w-full"
        modules={[Navigation, Pagination, A11y]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={1}
      >
        {images.length > 0
          ? images.map((image, index) => (
              <SwiperSlide className="h-auto object-contain" key={index}>
                <img
                  className="w-full h-56 object-cover"
                  src={image.src.src}
                  alt={image.alt}
                />
              </SwiperSlide>
          ))
          : <p>Não há imagens disponíveis</p>
        }
      </Swiper>
      <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 "></div>
      <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 "></div>
    </div>
  );
};

export default Carousel;
