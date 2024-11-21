'use client'

import AccordionFaq from '@/components/AccordionFaq/AccordionFaq';
import Faq from '@/types/Faq';
import Rodape from '@/components/Rodape/Rodape';

function Faqs() {
  // Array estático de FAQs
  const faqs: Faq[] = [
    {
      idQuestionario: 1,
      pergunta: "Como economizar energia elétrica ?",
      resposta: "Para economizar energia elétrica, é importante adotar práticas que reduzam o consumo de energia em casa. Algumas dicas são: apagar as luzes ao sair de um ambiente, desligar aparelhos eletrônicos da tomada quando não estiverem em uso, utilizar lâmpadas de LED, manter a geladeira em boas condições e evitar abrir a porta com frequência, entre outras. Além disso, é importante ficar atento ao uso de ar-condicionado e aquecedores, que são grandes vilões do consumo de energia. Ao adotar essas práticas, você contribui para a preservação do meio ambiente e ainda economiza na conta de luz.",

    },
    {
      idQuestionario: 2,
      pergunta: "Quais maneiras acessiveis de energias sustentaveis ?",
      resposta: "As maneiras acessiveis de energias sustentáveis são aquelas que utilizam fontes renováveis e limpas para gerar energia. Alguns exemplos são a energia solar, a energia eólica, a energia hidrelétrica e a energia de biomassa. Essas fontes de energia são consideradas sustentáveis porque não emitem gases poluentes na atmosfera e não contribuem para o aquecimento global. Além disso, são fontes inesgotáveis, ou seja, não se esgotam com o tempo. Por isso, investir em energias sustentáveis é uma ótima maneira de contribuir para a preservação do meio ambiente e garantir um futuro mais limpo e saudável para as próximas gerações.",

    },
    {
      idQuestionario: 3,
      pergunta: "Onde posso aprender a economizar energia elétrica ?",
      resposta: "Em lives com especialistas disponiblizadas por nós em nossa plataforma !",

    },
    {
      idQuestionario: 4,
      pergunta: "Quais são os benefícios de economizar energia elétrica ?",
      resposta: "Economizar energia elétrica traz diversos benefícios para o meio ambiente e para o seu bolso. Ao reduzir o consumo de energia, você contribui para a preservação dos recursos naturais e para a redução da emissão de gases poluentes na atmosfera. Além disso, economizar energia também ajuda a reduzir a conta de luz no final do mês, o que pode representar uma economia significativa ao longo do ano. Por fim, ao adotar práticas sustentáveis em casa, você contribui para a construção de um futuro mais limpo e saudável para as próximas gerações.",

    },
    {
      idQuestionario: 5,
      pergunta: "Por que devo economizar energia elétrica ?",
      resposta: "Economizar energia elétrica é importante porque a energia elétrica é um recurso finito e não renovável. Isso significa que, se não adotarmos práticas sustentáveis de consumo de energia, corremos o risco de esgotar os recursos naturais disponíveis e comprometer o futuro das próximas gerações. Além disso, o consumo excessivo de energia elétrica contribui para o aquecimento global e para a emissão de gases poluentes na atmosfera, o que pode causar danos irreversíveis ao meio ambiente. Por isso, é fundamental adotar práticas de economia de energia em casa e no trabalho para garantir um futuro mais limpo e sustentável para todos.",

    },
    {
      idQuestionario: 6,
      pergunta: "Qual é a energia que mais polui ?",
      resposta: "A energia que mais polui é a energia gerada a partir de combustíveis fósseis, como o carvão, o petróleo e o gás natural. Esses combustíveis são considerados não renováveis e emitem uma grande quantidade de gases poluentes na atmosfera, como o dióxido de carbono (CO2), o óxido de enxofre (SOx) e o óxido de nitrogênio (NOx). Esses gases contribuem para o aquecimento global, o efeito estufa e a poluição do ar, o que pode causar danos irreversíveis ao meio ambiente e à saúde humana. Por isso, é importante investir em fontes de energia limpas e renováveis, como a energia solar, a energia eólica e a energia hidrelétrica, para reduzir a emissão de gases poluentes e garantir um futuro mais limpo e saudável para todos.",

    },
    {
      idQuestionario: 7,
      pergunta: "Instalar paineis solares é uma boa opção ?",
      resposta: "Sim, instalar painéis solares é uma ótima opção para quem deseja economizar energia e contribuir para a preservação do meio ambiente. Os painéis solares são dispositivos que captam a energia do sol e a transformam em energia elétrica, que pode ser utilizada para abastecer residências, empresas e indústrias. Além de ser uma fonte de energia limpa e renovável, a energia solar também é econômica, pois permite reduzir a conta de luz no final do mês e até mesmo gerar créditos de energia para serem utilizados em períodos de baixa insolação. Por isso, instalar painéis solares é uma excelente opção para quem deseja economizar energia, reduzir a emissão de gases poluentes e garantir um futuro mais limpo e sustentável para todos.",

    },
    {
      idQuestionario: 8,
      pergunta: "Qual a porcentagem de energia eoólica no Brasil ?",
      resposta: "A energia eólica é uma das fontes de energia mais promissoras do Brasil. Atualmente, a energia eólica representa cerca de 10% da matriz energética do país, o que a coloca como a segunda fonte de energia mais utilizada no Brasil, atrás apenas da energia hidrelétrica. A energia eólica é considerada uma fonte de energia limpa e renovável, pois utiliza a força dos ventos para gerar eletricidade, sem emitir gases poluentes na atmosfera. Além disso, a energia eólica é uma fonte inesgotável, o que a torna uma opção sustentável e econômica para o futuro. Por isso, o Brasil tem investido cada vez mais na geração de energia eólica, visando reduzir a dependência de fontes de energia não renováveis e contribuir para a preservação do meio ambiente.",

    },
  ];

  return (
    <main className="p-12 flex flex-col gap-6 min-h-screen bg-background">
      <section className="flex-grow">
      {faqs.map((faq) => (
        <AccordionFaq key={faq.idQuestionario} faq={faq} />
      ))}
      </section>
      <Rodape />
    </main>
  );
}


export default Faqs;
