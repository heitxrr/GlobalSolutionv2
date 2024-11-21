'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';

interface EventCarouselProps {
  title: string;
  events: { title: string; link: string; image: string }[];
}

const EventCarousel: React.FC<EventCarouselProps> = ({ title, events }) => {
  return (
    <div className="w-full mb-6">
      <h2 className="text-xl font-semibold mb-4 text-center">{title}</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation={true}
        modules={[Navigation]}
        className="w-full"
      >
        {events.map((event, index) => (
          <SwiperSlide key={index}>
            <Link href={event.link}>
              <div className="relative flex flex-col items-center justify-center bg-background rounded-lg overflow-hidden">
                <div
                  className="w-full h-40 bg-cover bg-center"
                  style={{ backgroundImage: `url(${event.image})` }}
                />
                <div className="absolute inset-0 bg-green-500 opacity-40"></div>
                <div className="absolute top-1/2 transform -translate-y-1/2 z-10 text-center text-white font-semibold text-lg">
                  {event.title}
                </div>
                <div className="absolute inset-y-0 right-0 w-4 bg-green-500"></div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EventCarousel;
