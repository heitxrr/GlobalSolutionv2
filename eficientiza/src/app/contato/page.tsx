"use client";

import React from "react";
import MenuContato from "@/components/Contato/Contato";
import Rodape from "@/components/Rodape/Rodape";

const ContatoPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow">
        <section className="flex items-center justify-center py-10">
          {/* Contêiner centralizado e ajustado */}
          <div className="w-full max-w-4xl px-4">
            <MenuContato />
          </div>
        </section>
      </main>
      <Rodape />
    </div>
  );
};

export default ContatoPage;
