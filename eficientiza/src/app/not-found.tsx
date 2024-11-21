'use client';

import Rodape from "@/src/components/Rodape/Rodape";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-background">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Página não encontrada</h1>
        <p className="text-gray-600 mb-6 text-center">
          Parece que a página que você está procurando não existe.
        </p>
        <button
          onClick={() => router.push('/')}
          className="px-6 py-3 bg-eficientiza text-black rounded-md hover:black transition"
        >
          Voltar para a página inicial
        </button>
      </div>
      <Rodape/>
    </>
  );
};

export default NotFound;
