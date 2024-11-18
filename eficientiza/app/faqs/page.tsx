'use client'

import AccordionFaq from '../../components/accordionfaq/AccordionFaq';
import Faq from '@/types/Faq';

function Faqs() {
  // Array estático de FAQs
  const faqs: Faq[] = [
    {
      idQuestionario: 1,
      pergunta: "Como ganho pontos usando o app?",
      resposta: "No PortoQuest, nosso sistema de pontos recompensa você por utilizar os serviços das oficinas parceiras da Porto Seguro (CAPS). Funciona da seguinte forma: ao realizar qualquer serviço em uma dessas oficinas, você acumula pontos, chamados de Estrelas. O número de Estrelas que você ganha pode variar dependendo da complexidade e do valor do serviço. Para garantir que as Estrelas sejam atribuídas à sua conta, informe seu CPF no momento do pagamento. Após a conclusão do serviço, as Estrelas serão automaticamente creditadas no seu aplicativo PortoQuest.",
      categoriaQuestionario: "Sistema de Pontos"
    },
    {
      idQuestionario: 2,
      pergunta: "Como funciona o esquema de pontos?",
      resposta: "No PortoQuest, nosso sistema de pontos recompensa você por utilizar os serviços das oficinas parceiras da Porto Seguro (CAPS). Funciona da seguinte forma: ao realizar qualquer serviço em uma dessas oficinas, você acumula pontos, chamados de Estrelas. O número de Estrelas que você ganha pode variar dependendo da complexidade e do valor do serviço. Para garantir que as Estrelas sejam atribuídas à sua conta, informe seu CPF no momento do pagamento. Após a conclusão do serviço, as Estrelas serão automaticamente creditadas no seu aplicativo PortoQuest.",
      categoriaQuestionario: "Sistema de Pontos"
    },
    {
      idQuestionario: 3,
      pergunta: "De que maneira posso acumular pontos?",
      resposta: "No PortoQuest, nosso sistema de pontos recompensa você por utilizar os serviços das oficinas parceiras da Porto Seguro (CAPS). Funciona da seguinte forma: ao realizar qualquer serviço em uma dessas oficinas, você acumula pontos, chamados de Estrelas. O número de Estrelas que você ganha pode variar dependendo da complexidade e do valor do serviço. Para garantir que as Estrelas sejam atribuídas à sua conta, informe seu CPF no momento do pagamento. Após a conclusão do serviço, as Estrelas serão automaticamente creditadas no seu aplicativo PortoQuest.",
      categoriaQuestionario: "Sistema de Pontos"
    },
    {
      idQuestionario: 4,
      pergunta: "Quais são as formas de ganhar pontos no aplicativo?",
      resposta: "No PortoQuest, nosso sistema de pontos recompensa você por utilizar os serviços das oficinas parceiras da Porto Seguro (CAPS). Funciona da seguinte forma: ao realizar qualquer serviço em uma dessas oficinas, você acumula pontos, chamados de Estrelas. O número de Estrelas que você ganha pode variar dependendo da complexidade e do valor do serviço. Para garantir que as Estrelas sejam atribuídas à sua conta, informe seu CPF no momento do pagamento. Após a conclusão do serviço, as Estrelas serão automaticamente creditadas no seu aplicativo PortoQuest.",
      categoriaQuestionario: "Sistema de Pontos"
    },
    {
      idQuestionario: 5,
      pergunta: "Como os pontos são calculados?",
      resposta: "No PortoQuest, nosso sistema de pontos recompensa você por utilizar os serviços das oficinas parceiras da Porto Seguro (CAPS). Funciona da seguinte forma: ao realizar qualquer serviço em uma dessas oficinas, você acumula pontos, chamados de Estrelas. O número de Estrelas que você ganha pode variar dependendo da complexidade e do valor do serviço. Para garantir que as Estrelas sejam atribuídas à sua conta, informe seu CPF no momento do pagamento. Após a conclusão do serviço, as Estrelas serão automaticamente creditadas no seu aplicativo PortoQuest.",
      categoriaQuestionario: "Sistema de Pontos"
    },
    {
      idQuestionario: 6,
      pergunta: "Como consigo mais pontos no app?",
      resposta: "No PortoQuest, nosso sistema de pontos recompensa você por utilizar os serviços das oficinas parceiras da Porto Seguro (CAPS). Funciona da seguinte forma: ao realizar qualquer serviço em uma dessas oficinas, você acumula pontos, chamados de Estrelas. O número de Estrelas que você ganha pode variar dependendo da complexidade e do valor do serviço. Para garantir que as Estrelas sejam atribuídas à sua conta, informe seu CPF no momento do pagamento. Após a conclusão do serviço, as Estrelas serão automaticamente creditadas no seu aplicativo PortoQuest.",
      categoriaQuestionario: "Sistema de Pontos"
    },
    {
      idQuestionario: 7,
      pergunta: "Como é o sistema de recompensas por pontos?",
      resposta: "No PortoQuest, nosso sistema de pontos recompensa você por utilizar os serviços das oficinas parceiras da Porto Seguro (CAPS). Funciona da seguinte forma: ao realizar qualquer serviço em uma dessas oficinas, você acumula pontos, chamados de Estrelas. O número de Estrelas que você ganha pode variar dependendo da complexidade e do valor do serviço. Para garantir que as Estrelas sejam atribuídas à sua conta, informe seu CPF no momento do pagamento. Após a conclusão do serviço, as Estrelas serão automaticamente creditadas no seu aplicativo PortoQuest.",
      categoriaQuestionario: "Sistema de Pontos"
    },
    {
      idQuestionario: 8,
      pergunta: "O que eu preciso fazer para ganhar pontos?",
      resposta: "No PortoQuest, nosso sistema de pontos recompensa você por utilizar os serviços das oficinas parceiras da Porto Seguro (CAPS). Funciona da seguinte forma: ao realizar qualquer serviço em uma dessas oficinas, você acumula pontos, chamados de Estrelas. O número de Estrelas que você ganha pode variar dependendo da complexidade e do valor do serviço. Para garantir que as Estrelas sejam atribuídas à sua conta, informe seu CPF no momento do pagamento. Após a conclusão do serviço, as Estrelas serão automaticamente creditadas no seu aplicativo PortoQuest.",
      categoriaQuestionario: "Sistema de Pontos"
    },
  ];

  return (
    <main className="p-12 flex flex-col gap-6">
      {faqs.map((faq) => (
        <AccordionFaq key={faq.idQuestionario} faq={faq} />
      ))}
    </main>
  );
}

export default Faqs;
