"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const fetchPostagem = async (id: string) => {
  const response = await fetch(`http://localhost:8080/postagem/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar postagem");
  }

  return response.json();
};

const DetalhesPostagem: React.FC = () => {
  const router = useRouter();
  const [postagem, setPostagem] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const id = window.location.pathname.split("/").pop(); // Obter o ID da URL
    if (!id) {
      setError("ID da postagem não encontrado");
      setLoading(false);
      return;
    }

    fetchPostagem(id)
      .then((data) => {
        setPostagem(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Erro ao carregar a postagem");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <p className="text-gray-500 text-lg">Carregando detalhes da postagem...</p>
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
      <header className="w-full bg-white p-4 flex items-center shadow">
        <button
          onClick={() => router.back()}
          className="text-blue-500 font-bold text-xl"
        >
          ← Voltar
        </button>
      </header>
      <main className="bg-white shadow-lg rounded-lg p-6 max-w-3xl w-full mt-4">
        <h1 className="text-2xl font-bold mt-4">{postagem.tituloPostagem}</h1>
        <p className="text-gray-600 mt-2">{postagem.descricaoPostagem}</p>
      </main>
    </div>
  );
};

export default DetalhesPostagem;
