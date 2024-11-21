'use client';

import React from 'react';
import Carousel from '@/components/Carousel/Carousel';  
import Rodape from '@/components/Rodape/Rodape';        
import CardPost from '@/components/CardPost/CardPost';

// Imagens de teste,quando terminar de importar apis, apagar
import imgAutor1 from "../../public/images/teste/energia-hidreletrica.jpg";
import imgAutor2 from "../../public/images/teste/energia-solar.jpg";
import imgAutor3 from "../../public/images/teste/energia-eolica.jpg";
import { StaticImageData } from 'next/image';

const Home = () => {
  const images: { src: StaticImageData; alt: string }[] = [
    { src: imgAutor1, alt: '' },
    { src: imgAutor2, alt: '' },
    { src: imgAutor3, alt: '' },
  ];

  const posts = [
    {
      title: "Como a Energia Hidrelétrica Transforma o Futuro Sustentável",
      description: "Entenda os impactos da energia hidrelétrica e sua importância no cenário energético atual.",
      link: "/post/energia-hidreletrica",
    },
    {
      title: "A Revolução da Energia Solar no Brasil",
      description: "A energia solar tem ganhado destaque, e nós vamos te mostrar o porquê.",
      link: "/post/energia-solar",
    },
    {
      title: "Desafios e Benefícios da Energia Eólica",
      description: "Explore como a energia eólica está mudando o setor energético global.",
      link: "/post/energia-eolica",
    },
    {
      title: "Sustentabilidade e Inovações em Energias Renováveis",
      description: "Fique por dentro das novas inovações no campo das energias renováveis.",
      link: "/post/sustentabilidade-inovacoes",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
        <section className="flex flex-col items-center">
          <Carousel images={images} />
          <h1 className="text-2xl font-bold p-8">Postagens</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 p-8 w-full">
            {posts.map((post, index) => (
              <CardPost
                key={index}
                title={post.title}
                description={post.description}
                link={post.link}
              />
            ))}
          </div>
        </section>
      </main>
      <Rodape />
    </div>
  );
};

export default Home;
