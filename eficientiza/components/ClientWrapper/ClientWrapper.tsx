'use client';

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Melhor opção para mudanças de rota
import Loading from "@/components/Loading/Loading";

export default function ClientWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true); // Ativa o loading

    // Simula o carregamento por um curto período de tempo
    const timeout = setTimeout(() => {
      setLoading(false); // Desativa o loading
    }, 1000);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      {loading && <Loading />} {/* Mostra o componente de loading */}
      {!loading && children} {/* Mostra o conteúdo quando o loading termina */}
    </>
  );
}
