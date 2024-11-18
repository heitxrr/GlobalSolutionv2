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
    <main>
      <section className='flex flex-col items-center'>
        <h1 className='text-2xl font-bold p-8'>Confira nossos eventos:</h1>
        <Carousel oficinas={oficinas} />
        <p className='p-8 px-28 text-center'>A, B, C, D</p>
      </section>
      <Rodape />
    </main>
  )
}

export default Home