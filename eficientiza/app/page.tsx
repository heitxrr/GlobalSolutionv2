'use client'

import React, { useEffect, useState } from 'react'
import Carousel from '../components/carousel/Carousel'
import Rodape from '../components/Rodape/Rodape';

const Home = () => {
  const [oficinas, setOficinas] = useState<Oficina[]>([]);

  useEffect(() => {
    async function fetchOficinas() {
      try {
        const response = await fetch('http://localhost:8080/oficinas');
        const data = await response.json();
        setOficinas(data);
      } catch (error) {
        console.error('Error fetching oficinas:', error);
      }
    }

    fetchOficinas();
  }, []); 
  
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className='flex flex-col items-center'>
          <h1 className='text-2xl font-bold p-8'>Confira nossos eventos:</h1>
          <Carousel oficinas={oficinas} />
          <p className='p-8 px-28 text-center'>Eficientiza é um projeto dedicado a promover a sustentabilidade energética através de eventos e marketing. Nosso objetivo é conscientizar e educar a comunidade sobre práticas eficientes de uso de energia, contribuindo para um futuro mais sustentável.</p>
          <p className='p-8 px-28 text-center'>Aqui você encontra informações sobre nossos eventos, dicas de economia de energia, contato com nossos especialistas e muito mais. Aproveite!</p>
        </section>
      </main>
      <Rodape />
    </div>
  )
}

export default Home