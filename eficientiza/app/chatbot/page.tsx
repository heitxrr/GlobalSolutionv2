'use client'

import { ChangeEvent, useState } from 'react';
import ChatMessage from '../../components/chatmessage/ChatMessage';

function Chat() {
  interface ChatMessage {
    mensagem: string;
    destinatario: boolean;
  }

  const [chatMensagem, setChatMensagem] = useState<ChatMessage>({
    mensagem: '',
    destinatario: false,
  });

  const [chatMessages, setChatMessages] = useState<Array<ChatMessage>>([]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setChatMensagem({
      ...chatMensagem,
      [e.target.name]: e.target.value
    });
  }

  async function adicionarMensagem(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newMessages = [...chatMessages, chatMensagem];
    setChatMessages(newMessages);
    
    try {
      const response = await fetch('http://127.0.0.1:5000/chatbot-faq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pergunta: chatMensagem.mensagem }),
      });

      const data = await response.json();

      if (data.error) {
        console.error(data.error);
        return;
      }

      const predictionMessage: ChatMessage = {
        mensagem: data.resposta || "Não entendi a pergunta.",
        destinatario: true,
      };

      setChatMessages([...newMessages, predictionMessage]);
    } catch (error) {
      console.error('Error sending message to prediction API:', error);
    }

    setChatMensagem({ mensagem: '', destinatario: false });
  }

  return (
    <main>
      <ul className='w-full h-[calc(100vh-10rem)] bg-blue-700 overflow-scroll overflow-x-hidden p-10 flex flex-col gap-10'>
        {chatMessages.map((message, index) => (
          <ChatMessage key={index} message={message.mensagem} destinatario={message.destinatario} />
        ))}
      </ul>

      <form onSubmit={adicionarMensagem} className='w-full'>
        <fieldset className='w-full flex'>
          <input className="w-full p-6 text-xl" type="text" placeholder='Envie uma mensagem'
            id="mensagem"
            name="mensagem"
            value={chatMensagem.mensagem}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
        </fieldset>
      </form>
    </main>
  );
}

export default Chat;
