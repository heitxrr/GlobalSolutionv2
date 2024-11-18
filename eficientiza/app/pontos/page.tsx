'use client'

import { IoIosStar } from 'react-icons/io';
import CirculoResgate from '../../components/circuloresgate/CirculoResgate';
import { useEffect, useState, useContext } from 'react';
import Recompensa from '@/types/Recompensa';
import useUsuario from '@/hooks/UseUsuario';
import Link from 'next/link';

function Pontos() {
  const { usuario } = useUsuario();
  const [recompensas, setRecompensas] = useState<Recompensa[]>([]);

  useEffect(() => {
    async function fetchRecompensas() {
      try {
        const response = await fetch('http://localhost:8080/recompensas');
        const data = await response.json();
        setRecompensas(data);
      } catch (error) {
        console.error('Error fetching recompensas:', error);
      }
    }

    fetchRecompensas();
  }, []);

  const pontos = usuario ? usuario.totalPontos : null; 

  return (
    <main className="p-4 flex flex-col items-center mm">
      <div className="mb-6 w-full flex justify-around mt-4">
        <h1 className="text-xl font-bold flex items-center gap-2">
          Meus Pontos: {pontos !== null ? pontos : 'N/A'} <IoIosStar color="blue" />
        </h1>
        <h2 className="text-lg">Data de vigência: {new Date().toLocaleDateString()}</h2>
      </div>
      <section className="relative flex items-center">
        <div className="absolute inset-0 flex items-center px-[8vw]">
          <div className="w-full h-1 bg-purple"></div>
        </div>

        <div className="flex flex-col items-center gap-12 justify-evenly w-full my-20 lg:flex-row xl:flex-row">
          {recompensas.length > 0 ? (
            recompensas.map(recompensa => (
              <CirculoResgate
                key={recompensa.idRecompensa}
                recompensa={recompensa} 
                posicaoTexto={'Top'}
              />
            ))
          ) : (
            <p>Nenhuma recompensa disponível.</p>
          )}
        </div>
      </section>

      <Link href={'/resgates'} className='mt-12 bg-blue-700 text-white p-2 px-32 rounded-full'>Resgatar</Link>
    </main>
  );
}

export default Pontos;
