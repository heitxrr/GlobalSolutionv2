'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Carousel from '@/components/Carousel/Carousel';
import Rodape from '@/components/Rodape/Rodape';
import CardPost from '@/components/CardPost/CardPost';

type Banner = {
  idBanner: number;
  idEvento: number | null;
  urlBanner: string;
};

type Postagem = {
  idPostagem: number;
  tituloPostagem: string;
  descricaoPostagem: string;
};

const Home = () => {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [postagens, setPostagens] = useState<Postagem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch banners
        const bannersResponse = await fetch('http://localhost:8080/banner');
        if (!bannersResponse.ok) {
          throw new Error('Erro ao buscar banners');
        }
        const bannersData: Banner[] = await bannersResponse.json();
        setBanners(bannersData);

        // Fetch postagens
        const postagensResponse = await fetch('http://localhost:8080/postagem');
        if (!postagensResponse.ok) {
          throw new Error('Erro ao buscar postagens');
        }
        const postagensData: Postagem[] = await postagensResponse.json();
        setPostagens(postagensData);

        setLoading(false);
      } catch (error: any) {
        setError(error.message || 'Erro inesperado');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center p-4">Carregando dados...</div>;
  }

  if (error) {
    return <div className="text-center p-4 text-red-500">Erro: {error}</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow">
        {/* Carrossel de Banners */}
        <section className="flex flex-col items-center p-6">
          <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">
            <Carousel
              images={banners.map((banner) => ({
                src: banner.urlBanner,
                alt: `Banner relacionado ao evento ${banner.idEvento || ''}`,
              }))}
            />
          </div>
        </section>

        {/* Listagem de Postagens */}
        <section className="p-8">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-700">
            Postagens Recentes
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {postagens.map((post) => (
              <Link
                key={post.idPostagem}
                href={`/postagem/${post.idPostagem}`}
                passHref
              >
                <div
                  className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer"
                >
                  <CardPost
                    title={post.tituloPostagem}
                    description={post.descricaoPostagem}
                  />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Rodape />
    </div>
  );
};

export default Home;
