"use client";

import React from "react";
import MenuContato from "@/components/menucontato/MenuContato";

const ContatoPage: React.FC = () => {
  const handleContatoSubmit = (nome: string, email: string, motivo: string) => {
    console.log("Nome:", nome);
    console.log("E-mail:", email);
    console.log("Motivo:", motivo);
    alert("Contato enviado com sucesso!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <MenuContato onSubmit={handleContatoSubmit} />
    </div>
  );
};

export default ContatoPage;
