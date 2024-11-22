import React from 'react';

type Postagem = {
  idPostagem: number;
  tituloPostagem: string;
  descricaoPostagem: string;
};

// Função para buscar os detalhes da postagem
const fetchPostagem = async (id: string): Promise<Postagem> => {
  const response = await fetch(`http://localhost:8080/postagem/${id}`, {
    cache: 'no-store', // Evita cache para sempre obter dados atualizados
  });

  if (!response.ok) {
    throw new Error('Erro ao buscar a postagem');
  }

  return response.json();
};

const DetalhesPostagem = async ({ params }: { params: { id: string } }) => {
  try {
    const postagem = await fetchPostagem(params.id);

    return (
      <div className="flex flex-col items-center min-h-screen bg-gray-50 p-8">
        <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl w-full">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {postagem.tituloPostagem}
          </h1>
          <p className="text-gray-700 leading-relaxed">{postagem.descricaoPostagem}</p>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="text-center p-4 text-red-500">
        Erro ao carregar a postagem. Tente novamente mais tarde.
      </div>
    );
  }
};

export default DetalhesPostagem;
