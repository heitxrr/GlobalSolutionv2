import React from 'react';

type Evento = {
  idEvento: number;
  tituloEvento: string;
  detalhesEvento: string;
  dataEvento: string;
  urlImagemEvento: string;
};

// Função assíncrona para buscar os dados do evento
const fetchEvento = async (id: string): Promise<Evento> => {
  const response = await fetch(`http://localhost:8080/evento/${id}`, {
    cache: 'no-store', // Para garantir que o dado seja atualizado
  });
  if (!response.ok) {
    throw new Error('Erro ao buscar evento');
  }
  return response.json();
};

interface DetalhesEventoProps {
  params: { id: string };
}

const DetalhesEvento = async ({ params }: DetalhesEventoProps) => {
  // Aguarda a resolução de `params` e busca os dados do evento
  const evento = await fetchEvento(params.id);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Header com botão de voltar */}
      <header className="w-full bg-white p-4 flex items-center shadow">
        <a href="/eventos" className="text-blue-500 font-bold text-xl">
          ←
        </a>
      </header>

      {/* Detalhes do evento */}
      <main className="bg-white shadow-lg rounded-lg p-6 max-w-3xl w-full mt-4">
        <img
          src={evento.urlImagemEvento}
          alt={evento.tituloEvento}
          className="w-full h-64 object-cover rounded-lg border border-gray-300"
        />
        <h1 className="text-2xl font-bold mt-4">{evento.tituloEvento}</h1>
        <p className="text-gray-600 mt-2">{evento.detalhesEvento}</p>
        <p className="text-gray-500 mt-4 font-medium">
          Data do evento: {new Date(evento.dataEvento).toLocaleDateString('pt-BR')}
        </p>
      </main>
    </div>
  );
};

export default DetalhesEvento;
