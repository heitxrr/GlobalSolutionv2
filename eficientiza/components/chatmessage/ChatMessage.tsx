
interface ChatMessageProps {
  message: string;
  destinatario: boolean;
}

function ChatMessage({ message, destinatario }: ChatMessageProps) {
  return (
    <div className={`w-full flex ${destinatario ? 'justify-start' : 'justify-end'}`}>
      <p className="bg-white rounded-lg py-4 px-8 text-black">
        {message}
      </p>
    </div>
  )
}

export default ChatMessage