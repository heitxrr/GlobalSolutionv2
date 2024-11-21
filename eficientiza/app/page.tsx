'use client';

import React from 'react';
import Carousel from '../components/carousel/Carousel';  // Caminho para o seu componente Carousel
import Rodape from '../components/Rodape/Rodape';        // Caminho para o seu componente Rodape

import imgAutor1 from "@/public/images/teste/energia-hidreletrica.jpg";
import imgAutor2 from "@/public/images/teste/energia-solar.jpg";
import imgAutor3 from "@/public/images/teste/energia-eolica.jpg";

// Definição do tipo StaticImageData
import { StaticImageData } from 'next/image';

const Home = () => {
  // Array de imagens com StaticImageData
  const images: { src: StaticImageData; alt: string }[] = [
    { src: imgAutor1, alt: 'Imagem do autor Alexsandro' },
    { src: imgAutor2, alt: 'Imagem do autor Leonardo' },
    { src: imgAutor3, alt: 'Imagem do autor Heitor' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="flex flex-col items-center">
          {/* Passando as imagens para o Carousel */}
          <Carousel images={images} />
          <h1 className="text-2xl font-bold p-8">Postagens</h1>
          <p className="p-8 px-28 text-center">
            Eficientiza é um projeto dedicado a promover a sustentabilidade energética através de eventos e marketing.
            Nosso objetivo é conscientizar e educar a comunidade sobre práticas eficientes de uso de energia, contribuindo para um futuro mais sustentável.
          </p>
          <p className="p-8 px-28 text-center">
            Aqui você encontra informações sobre nossos eventos, dicas de economia de energia, contato com nossos especialistas e muito mais. Aproveite!
          </p>
        </section>
      </main>
      <Rodape />
    </div>
  );
};

export default Home;
