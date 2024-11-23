"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const fetchEvento = async (id: string) => {
  const response = await fetch(`http://localhost:8080/evento/${id}`, {
    cache: "no-store", // Garante que o dado seja atualizado em cada requisição
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar evento");
  }

  return response.json();
};

const DetalhesEvento: React.FC = () => {
  const router = useRouter();
  const [evento, setEvento] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const id = window.location.pathname.split("/").pop(); // Extrai o ID diretamente da URL
    if (!id) {
      setError("ID do evento não encontrado");
      setLoading(false);
      return;
    }

    fetchEvento(id)
      .then((data) => {
        setEvento(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Erro ao carregar o evento");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <p className="text-gray-500 text-lg">Carregando detalhes do evento...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <p className="text-red-500 text-lg font-bold">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Header com botão de voltar */}
      <header className="w-full bg-white p-4 flex items-center shadow">
        <button
          onClick={() => router.back()}
          className="text-blue-500 font-bold text-xl"
        >
          ← Voltar
        </button>
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
          Data do evento:{" "}
          {new Date(evento.dataEvento).toLocaleDateString("pt-BR")}
        </p>
      </main>
    </div>
  );
};

export default DetalhesEvento;
