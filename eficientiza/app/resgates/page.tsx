'use client'

import { useEffect, useState } from 'react';
import Recompensa from '@/types/Recompensa';

function Resgates() {
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

  return (
    <main className="w-full flex flex-col items-center p-16 gap-8">
      {recompensas.length > 0 ? (
        <>
          <h1 className="font-bold text-2xl">Resgatar: {recompensas[0].descricao}</h1>
          <img className="h-2/5 w-2/5" src='https://upload.wikimedia.org/wikipedia/commons/f/fa/Link_pra_pagina_principal_da_Wikipedia-PT_em_codigo_QR_b.svg' alt="QR Code" />
          <h2 className="text-xl">Apresente esse QR Code na oficina mecânica</h2>
          
          <div className="mt-8">
            <h3 className="text-lg font-semibold">Suas recompensas disponíveis:</h3>
            <ul className="list-disc pl-5">
              {recompensas.map(recompensa => (
                <li key={recompensa.idRecompensa}>{recompensa.descricao}</li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <p className="mt-4">Nenhuma recompensa disponível.</p>
      )}
    </main>
  );
}

export default Resgates;
