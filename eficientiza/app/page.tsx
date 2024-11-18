'use client'

import React, { useEffect, useState } from 'react'
import Carousel from '../components/carousel/Carousel'
import { Oficina } from '@/types/Oficina';

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
    <main className='flex flex-col items-center'>
      <h1 className='text-2xl font-bold p-8'>Confira nossos parceiros:</h1>
      <Carousel oficinas={oficinas} />
      <p className='p-8 px-28 text-center'>A PortoQuest visa criar uma experiência dinâmica e recompensadora para a manutenção de veículos, utilizando a gamificação para incentivar visitas regulares e premiar a lealdade dos usuários. <br/> Com um sistema de pontos, manutenções gratuitas e uma plataforma de promoção para oficinas, oferecemos uma solução completa que beneficia tanto os consumidores quanto os prestadores de serviços. <br /> O suporte contínuo através do nosso chatbot e as notificações personalizadas garantem uma comunicação eficaz e uma experiência do usuário excepcional.</p>
    </main>
  )
}

export default Home