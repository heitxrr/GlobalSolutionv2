'use client';

import EventCarousel from '@/components/EventCarousel/EventCarousel';
import Rodape from '@/components/Rodape/Rodape';

const Eventos = () => {
  const eventsWeek = [
    { title: 'Distribuição de sementes', link: '/page1', image: '/images/teste/energia-hidreletrica.jpg' },
    { title: 'Distribuição de sementes', link: '/page2', image: '/images/teste/energia-solar.jpg' },
    { title: 'Distribuição de sementes', link: '/page3', image: '/images/logo-eficientiza-navbar.png' },
    { title: 'Distribuição de sementes', link: '/page4', image: '/images/teste/energia-eolica.jpg' },
  ];

  const eventsMonth = [
    { title: 'Distribuição de sementes', link: '/page1', image: '/images/teste/energia-hidreletrica.jpg' },
    { title: 'Distribuição de sementes', link: '/page2', image: '/images/teste/energia-solar.jpg' },
    { title: 'Distribuição de sementes', link: '/page3', image: '/images/logo-eficientiza-navbar.png' },
    { title: 'Distribuição de sementes', link: '/page4', image: '/images/teste/energia-eolica.jpg' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
        <h1 className="text-2xl font-bold mb-6 text-center">Confira eventos em sua região</h1>
        <EventCarousel title="Próxima semana" events={eventsWeek} />
        <EventCarousel title="Próximo mês" events={eventsMonth} />
      </main>
      <Rodape />
    </div>
  );
};

export default Eventos;
