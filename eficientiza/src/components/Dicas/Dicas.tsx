import React, { useState, useEffect } from 'react';

type Dica = {
  idDica: number;
  tituloDica: string;
  descricaoDica: string;
};

const Dicas: React.FC = () => {
  const [dicas, setDicas] = useState<Dica[]>([]);
  const [openIndices, setOpenIndices] = useState<number[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Função para buscar as dicas da API
  useEffect(() => {
    const fetchDicas = async () => {
      try {
        const response = await fetch('http://localhost:8080/dicas');
        if (!response.ok) {
          throw new Error('Erro ao buscar as dicas da API.');
        }
        const data: Dica[] = await response.json();
        setDicas(data);
        setLoading(false);
      } catch (err: any) {
        setError(err.message || 'Erro inesperado ao carregar as dicas.');
        setLoading(false);
      }
    };

    fetchDicas();
  }, []);

  const toggleQuestion = (index: number) => {
    setOpenIndices((prevOpenIndices) =>
      prevOpenIndices.includes(index)
        ? prevOpenIndices.filter((i) => i !== index) // Fecha se estiver aberta
        : [...prevOpenIndices, index] // Abre se estiver fechada
    );
  };

  if (loading) {
    return <div className="text-center p-4">Carregando dicas...</div>;
  }

  if (error) {
    return (
      <div className="text-center p-4 text-red-500">
        <p>Erro ao carregar as dicas.</p>
        <p>{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
        >
          Tentar Novamente
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-center text-2xl font-bold mb-6">Dicas de Economia</h1>
      {dicas.map((dica, index) => (
        <div
          key={dica.idDica}
          className="border rounded-lg overflow-hidden mb-4 shadow-lg transition-transform hover:scale-105"
        >
          {/* Título da dica */}
          <div
            className="bg-[#5BB85C] p-4 cursor-pointer font-semibold text-white"
            onClick={() => toggleQuestion(index)}
          >
            {dica.tituloDica}
          </div>

          {/* Descrição com transição */}
          <div
            className={`transition-all duration-500 ease-in-out ${
              openIndices.includes(index) ? 'max-h-screen p-4' : 'max-h-0 p-0'
            } bg-[#D8F3DC] overflow-hidden`}
          >
            <p className="text-gray-800">{dica.descricaoDica}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dicas;
