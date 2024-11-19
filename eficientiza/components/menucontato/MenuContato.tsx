"use client";

import React, { useState } from "react";

interface MenuContatoProps {
  onSubmit: (email: string, motivo: string) => void;
}

const MenuContato: React.FC<MenuContatoProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState<string>("");
  const [motivo, setMotivo] = useState<string>("");
  const [erro, setErro] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação básica
    if (!email || !email.includes("@")) {
      setErro("Por favor, insira um e-mail válido.");
      return;
    }

    if (!motivo.trim()) {
      setErro("Por favor, insira um motivo para seu contato.");
      return;
    }

    // Envia os dados para o callback
    onSubmit(email, motivo);

    // Limpa os campos
    setEmail("");
    setMotivo("");
    setErro("");
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4 text-gray-800">Entre em Contato</h1>
      <form onSubmit={handleSubmit} className="w-full">
        {erro && <p className="text-red-500 mb-2 text-sm">{erro}</p>}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="motivo" className="block text-gray-700 font-medium mb-1">
            Motivo do Contato
          </label>
          <textarea
            id="motivo"
            placeholder="Escreva o motivo do seu contato"
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition w-full font-medium"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default MenuContato;
