"use client";

import React from "react";
import MenuContato from "@/src/components/Contato/Contato";
import Rodape from "@/src/components/Rodape/Rodape";

const ContatoPage: React.FC = () => {
  const handleContatoSubmit = (email: string, motivo: string) => {
    console.log("E-mail:", email);
    console.log("Motivo:", motivo);
    alert("Contato enviado com sucesso!");
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
        <section className="my-10 flex items-center justify-center">
          <MenuContato onSubmit={handleContatoSubmit} />
        </section>
      </main>
      <Rodape />
    </div>
  );
};

export default ContatoPage;
