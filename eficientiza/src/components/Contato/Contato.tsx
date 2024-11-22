"use client";

import React, { useState } from "react";

const MenuContato: React.FC = () => {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [motivo, setMotivo] = useState<string>("");
  const [erro, setErro] = useState<string>("");
  const [mensagemSucesso, setMensagemSucesso] = useState<string>("");
  const [showPopup, setShowPopup] = useState<boolean>(true); // Controle de exibição do pop-up

  const handleClosePopup = () => {
    setShowPopup(false); // Fecha o pop-up
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");
    setMensagemSucesso("");

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

    const contato = {
      nomeContato: nome,
      emailContato: email,
      descricaoContato: motivo,
    };

    try {
      const response = await fetch("http://localhost:8080/contato", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contato),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar o contato. Tente novamente mais tarde.");
      }

      setMensagemSucesso("Contato enviado com sucesso!");
      setNome("");
      setEmail("");
      setMotivo("");
    } catch (error: any) {
      setErro(error.message || "Erro inesperado. Tente novamente mais tarde.");
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center bg-[#8AE27F] px-6 py-12 rounded-lg shadow-lg shadow-black max-w-3xl mx-auto">
      {/* Pop-up */}
      {showPopup && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-lg mx-auto">
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              Receba notícias diárias da Eficientiza com dicas práticas para cuidar do nosso planeta! 💚
            </h2>
            <p className="text-gray-600 mb-6">
              Sua opinião é muito importante para nós! Envie críticas ou sugestões e nos ajude a melhorar cada vez mais. 🌱
            </p>
            <button
              onClick={handleClosePopup}
              className="bg-[#00d4ff] text-white px-6 py-2 rounded-lg hover:bg-[#00b7d4] transition"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Formulário de Contato */}
      <div className="bg-white w-full rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">Entre em Contato</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {erro && <p className="text-red-500 text-sm">{erro}</p>}
          {mensagemSucesso && <p className="text-green-500 text-sm">{mensagemSucesso}</p>}
          <div>
            <label htmlFor="nome" className="block text-gray-700 font-medium">
              Nome Completo
            </label>
            <input
              id="nome"
              type="text"
              placeholder="Digite seu nome completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#48933F]"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#48933F]"
            />
          </div>
          <div>
            <label htmlFor="motivo" className="block text-gray-700 font-medium">
              Motivo do Contato
            </label>
            <textarea
              id="motivo"
              placeholder="Escreva o motivo do seu contato"
              value={motivo}
              onChange={(e) => setMotivo(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#48933F]"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default MenuContato;
