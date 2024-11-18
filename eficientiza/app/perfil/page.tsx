'use client'

import useUsuario from "@/hooks/UseUsuario";
import Link from "next/link";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

function Perfil() {
  const { usuario } = useUsuario(); 

  return (
    <>
      <aside className='w-full flex justify-end h-16 items-center gap-4 px-4'>
        <h1 className='text-xl'>Sair</h1>
        <figure>
          <IoArrowForwardCircleOutline color="red" size={'2rem'} />
        </figure>
      </aside>
      <main className='bg-[#00A0FB] w-[500px] text-white mx-auto rounded-3xl py-11 px-11 flex flex-col items-center gap-6'>
        <figure>
          <h1>{usuario?.email}</h1>
        </figure>
        <h1 className='text-2xl font-bold'>{usuario?.nome || "Nome do Usuário"}</h1>
        <h2 className='text-xl'>Total de pontos: {usuario?.totalPontos || 0}</h2>
        <div className='mt-4 w-full bg-white text-black p-4 rounded-full'>
          CPF: {usuario?.cpf || "CPF não disponível"}
        </div>
        <div className='w-full bg-white text-black p-4 rounded-full'>
          E-Mail: {usuario?.email || "Email não disponível"}
        </div>
        <button className='mt-4 w-full rounded-full bg-blue-700 text-lg p-2'>
          Trocar Senha
        </button>
        <Link href="/historico" className='w-full rounded-full bg-blue-700 text-lg p-2 text-center'>
          Histórico de Recompensas
        </Link>
      </main>
    </>
  );
}

export default Perfil;
