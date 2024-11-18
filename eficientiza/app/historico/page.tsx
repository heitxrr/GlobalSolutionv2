'use client'

import { useEffect, useState } from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Resgate from "../../components/resgate/Resgate";
import Recompensa from "@/types/Recompensa";

function Historico() {
  const [resgates, setResgates] = useState<Recompensa[]>([]);


  useEffect(() => {
    const fetchRecompensas = async () => {
      try {
        const response = await fetch('http://localhost:8080/resgate-usuario/3');
        const data = await response.json();
        setResgates(data); 
        console.log(resgates);
      } catch (error) {
        console.error('Error fetching recompensas:', error);
      }
    };

    fetchRecompensas();
  }, []);

  return (
    <>
      <aside className='w-full flex justify-end h-16 items-center gap-4 px-4'>
        <h1 className='text-xl'>Sair</h1>
        <figure>
          <IoArrowForwardCircleOutline color="red" size={'2rem'} />
        </figure>
      </aside>
      <main className="mx-auto w-3/4 bg-[#00A0FB] text-white flex flex-col items-center p-8 rounded-2xl">
        <h1 className="text-2xl font-bold">Meus Resgates</h1>
          <ul className="flex flex-col divide-y-2 divide-white w-full">
            {resgates.map((resgate) => (
              <Resgate key={resgate.idRecompensa} recompensa={resgate} />
            ))}
          </ul>
      </main>
    </>
  );
}

export default Historico;
