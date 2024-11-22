'use client';

import React, { useState } from 'react';

const CriarPostagem: React.FC = () => {
  const [titulo, setTitulo] = useState<string>('');
  const [descricao, setDescricao] = useState<string>('');
  const [erro, setErro] = useState<string>('');
  const [mensagemSucesso, setMensagemSucesso] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro('');
    setMensagemSucesso('');

    // Validações dos campos
    if (!titulo.trim()) {
      setErro('Por favor, insira um título para a postagem.');
      return;
    }
    if (!descricao.trim()) {
      setErro('Por favor, insira uma descrição para a postagem.');
      return;
    }

    // Dados a serem enviados
    const postagem = {
      tituloPostagem: titulo,
      descricaoPostagem: descricao,
    };

    try {
      const response = await fetch('http://localhost:8080/postagem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postagem),
      });

      if (!response.ok) {
        throw new Error('Erro ao criar a postagem. Tente novamente mais tarde.');
      }

      setMensagemSucesso('Postagem criada com sucesso!');
      setTitulo('');
      setDescricao('');
    } catch (error: any) {
      setErro(error.message || 'Erro inesperado. Tente novamente mais tarde.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Criar Postagem</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {erro && <p className="text-red-500 text-sm">{erro}</p>}
          {mensagemSucesso && <p className="text-green-500 text-sm">{mensagemSucesso}</p>}
          <div>
            <label htmlFor="titulo" className="block text-gray-700 font-medium">
              Título da Postagem
            </label>
            <input
              id="titulo"
              type="text"
              placeholder="Digite o título da postagem"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label htmlFor="descricao" className="block text-gray-700 font-medium">
              Descrição da Postagem
            </label>
            <textarea
              id="descricao"
              placeholder="Digite a descrição da postagem"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
          >
            Enviar Postagem
          </button>
        </form>
      </div>
    </div>
  );
};

export default CriarPostagem;
