import React, { useState } from 'react';

type Question = {
  question: string;
  answer: string;
};

const Dicas: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items: Question[] = [
    { question: 'Como economizar energia elétrica?', answer: 'Desligue aparelhos em standby, use lâmpadas LED e aproveite a luz natural.' },
    { question: 'Quais maneiras acessíveis de energias sustentáveis?', answer: 'Energia solar, eólica, e uso de biogás são acessíveis dependendo da região.' },
    { question: 'Onde posso aprender a economizar energia elétrica?', answer: 'Pesquise em sites de sustentabilidade e consulte manuais de eficiência energética.' },
    { question: 'Quais são os benefícios de economizar energia elétrica?', answer: 'Redução de custos, menor impacto ambiental e preservação de recursos naturais.' },
    { question: 'Por que devo economizar energia elétrica?', answer: 'Para reduzir sua pegada de carbono e ajudar o meio ambiente.' },
    { question: 'Qual é a energia que mais polui?', answer: 'A energia gerada por carvão mineral e petróleo é uma das mais poluentes.' },
    { question: 'Instalar painéis solares é uma boa opção?', answer: 'Sim, é uma solução sustentável que reduz custos a longo prazo.' },
  ];

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-center text-2xl font-bold mb-6">Dicas de Economia</h1>
      {items.map((item, index) => (
        <div
          key={index}
          className="border rounded-lg overflow-hidden mb-4"
        >
          {/* Título da pergunta */}
          <div
            className="bg-eficientiza p-4 cursor-pointer font-semibold"
            onClick={() => toggleQuestion(index)}
          >
            {item.question}
          </div>

          {/* Resposta com transição */}
          <div
            className={`transition-all duration-500 ease-in-out ${
              openIndex === index ? 'max-h-screen p-4' : 'max-h-0 p-0'
            } bg-[#91d487] overflow-hidden`}
          >
            <p className="text-black">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dicas;
