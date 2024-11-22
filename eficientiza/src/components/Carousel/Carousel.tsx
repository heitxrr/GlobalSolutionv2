import React from 'react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type CarouselImage = {
  src: string; // Permite tanto imagens locais quanto URLs externas
  alt: string;
};

interface CarouselProps {
  images: CarouselImage[];
}

const Carousel = ({ images }: CarouselProps) => {
  return (
    <div className="relative w-full h-[30vh]"> {/* Altura ajustada para 30% da altura da tela */}
      <Swiper
        className="w-full h-full" // Garanta que o Swiper ocupe todo o espaço disponível
        modules={[Navigation, Pagination, A11y]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={1}
      >
        {images.length > 0 ? (
          images.map((image, index) => (
            <SwiperSlide className="h-full" key={index}>
              <img
                className="w-full h-full object-cover" // Imagem ocupa todo o slide
                src={typeof image.src === 'string' ? image.src : image.src}
                alt={image.alt}
              />
            </SwiperSlide>
          ))
        ) : (
          <p className="text-center">Não há imagens disponíveis</p>
        )}
      </Swiper>
      <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2"></div>
      <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2"></div>
    </div>
  );
};

export default Carousel;
