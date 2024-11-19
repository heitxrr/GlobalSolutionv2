"use client";

import React from "react";
import MenuContato from "@/components/menucontato/MenuContato";
import Rodape from "@/components/rodape/Rodape";

const ContatoPage: React.FC = () => {
  const handleContatoSubmit = (email: string, motivo: string) => {
    console.log("E-mail:", email);
    console.log("Motivo:", motivo);
    alert("Contato enviado com sucesso!");
  };

  return (
    <main>
    <section className="my-10 flex items-center justify-center">
      <MenuContato onSubmit={handleContatoSubmit} />
    </section>
    <Rodape/>
    </main>
  );
};

export default ContatoPage;
