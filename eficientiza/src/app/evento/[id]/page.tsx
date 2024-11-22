import React from "react";
import { GetServerSideProps } from "next";
import { Evento } from "@/types/Evento";

const fetchEvento = async (id: string): Promise<Evento> => {
  const response = await fetch(`http://localhost:8080/evento/${id}`);
  if (!response.ok) {
    throw new Error("Erro ao buscar evento");
  }
  return response.json();
};

interface PageProps {
  evento: Evento;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const evento = await fetchEvento(id as string);
  return {
    props: {
      evento,
    },
  };
};

const DetalhesEvento = ({ evento }: PageProps) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="w-full bg-white p-4 flex items-center shadow">
        <a href="/eventos" className="text-blue-500 font-bold text-xl">
          ←
        </a>
      </header>
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
