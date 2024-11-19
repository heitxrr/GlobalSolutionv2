"use client";

import React, { useState } from "react";

interface MenuContatoProps {
  onSubmit: (nome: string, email: string, motivo: string) => void;
}

const MenuContato: React.FC<MenuContatoProps> = ({ onSubmit }) => {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [motivo, setMotivo] = useState<string>("");
  const [erro, setErro] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação básica
    if (!nome.trim()) {
      setErro("Por favor, insira seu nome completo.");
      return;
    }

    if (!email || !email.includes("@")) {
      setErro("Por favor, insira um e-mail válido.");
      return;
    }

    if (!motivo.trim()) {
      setErro("Por favor, insira um motivo para seu contato.");
      return;
    }

    // Envia os dados para o callback
    onSubmit(nome, email, motivo);

    // Limpa os campos
    setNome("");
    setEmail("");
    setMotivo("");
    setErro("");
  };

  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-[#8AE27F] p-6 rounded-lg shadow-lg shadow-black max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4 text-black">Entre em Contato</h1>
      <form onSubmit={handleSubmit} className="w-full">
        {erro && <p className="text-red-500 mb-2 text-sm">{erro}</p>}
        <div className="mb-4">
          <label htmlFor="nome" className="block text-black font-medium mb-1">
            Nome Completo
          </label>
          <input
            id="nome"
            type="text"
            placeholder="Digite seu nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:[#48933F]"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-black font-medium mb-1">
            E-mail
          </label>
          <input
            id="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:[#48933F]"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="motivo" className="block text-black font-medium mb-1">
            Motivo do Contato
          </label>
          <textarea
            id="motivo"
            placeholder="Escreva o motivo do seu contato"
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:[#48933F]"
          />
        </div>
        <button
          type="submit"
          className="bg-[#185210] text-white px-4 py-2 rounded-lg hover:bg-[#173413] transition w-full font-medium"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default MenuContato;
