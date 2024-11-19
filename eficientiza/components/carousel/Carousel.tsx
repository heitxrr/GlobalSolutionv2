import React, { useRef, useEffect } from 'react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperCore } from 'swiper/types';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Oficina } from '@/types/Oficina';



interface CarouselProps {
  oficinas: Oficina[] | null | undefined; 
}

const Carousel = ({ oficinas = [] }: CarouselProps) => {
  const nextButtonRef = useRef<HTMLButtonElement | null>(null);
  const prevButtonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div className="relative w-full">
      <Swiper
        className='w-full'
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: nextButtonRef.current,
          prevEl: prevButtonRef.current,
        }}
        pagination={{ clickable: true }}
        style={{
          "--swiper-navigation-color": "#000000",
          "--swiper-pagination-color": "#000000",
        } as React.CSSProperties} // Tipagem flexível
      >
        {Array.isArray(oficinas) 
          ? oficinas
              .map((oficina) => (
                <SwiperSlide className='h-auto object-contain' key={oficina.idOficina}>
                  <img className="w-full max-h-[800px] max-w-full object-cover" src={oficina.urlBanner} alt={oficina.nome} />
                </SwiperSlide>
              ))
          : <p>Não há oficinas disponiveis</p> 
        }
      </Swiper>
      
      {/* Navigation buttons */}
      <button ref={prevButtonRef} className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10"></button>
      <button ref={nextButtonRef} className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10"></button>
    </div>
  );
}

export default Carousel;
