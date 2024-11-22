'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Rodape from '@/components/Rodape/Rodape';

type Evento = {
  idEvento: number;
  tituloEvento: string;
  detalhesEvento: string;
  dataEvento: string;
  urlImagemEvento: string;
};

const Eventos: React.FC = () => {
  const [eventsWeek, setEventsWeek] = useState<Evento[]>([]);
  const [eventsMonth, setEventsMonth] = useState<Evento[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:8080/evento');
        if (!response.ok) {
          throw new Error('Erro ao buscar eventos');
        }
        const data: Evento[] = await response.json();

        // Separar eventos por data (próxima semana ou próximo mês)
        const now = new Date();
        const weekLater = new Date(now);
        weekLater.setDate(weekLater.getDate() + 7);
        const monthLater = new Date(now);
        monthLater.setMonth(monthLater.getMonth() + 1);

        const weekEvents = data.filter((event) => {
          const eventDate = new Date(event.dataEvento);
          return eventDate >= now && eventDate <= weekLater;
        });

        const monthEvents = data.filter((event) => {
          const eventDate = new Date(event.dataEvento);
          return eventDate > weekLater && eventDate <= monthLater;
        });

        setEventsWeek(weekEvents);
        setEventsMonth(monthEvents);
        setLoading(false);
      } catch (error: any) {
        setError(error.message || 'Erro inesperado');
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <div className="text-center p-4">Carregando eventos...</div>;
  }

  if (error) {
    return <div className="text-center p-4 text-red-500">Erro: {error}</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-background p-16">
      <main className="flex-grow">
        <h1 className="text-2xl font-bold mb-6 text-center">Confira eventos em sua região</h1>

        {/* Eventos da próxima semana */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Próxima semana</h2>
          {eventsWeek.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {eventsWeek.map((event) => (
                <Link key={event.idEvento} href={`/evento/${event.idEvento}`} passHref>
                  <div className="cursor-pointer bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition">
                    <img
                      src={event.urlImagemEvento}
                      alt={event.tituloEvento}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-bold">{event.tituloEvento}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center">Mais eventos na próxima semana em breve</p>
          )}
        </div>

        {/* Eventos do próximo mês */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Próximo mês</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {eventsMonth.map((event) => (
              <Link key={event.idEvento} href={`/evento/${event.idEvento}`} passHref>
                <div className="cursor-pointer bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition">
                  <img
                    src={event.urlImagemEvento}
                    alt={event.tituloEvento}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold">{event.tituloEvento}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Rodape />
    </div>
  );
};

export default Eventos;
