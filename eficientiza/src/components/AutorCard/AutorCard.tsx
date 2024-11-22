import Image from "next/image";
import { AutorCardProps } from "@/types/AutorCard";

export default function CardAutor({ cards }: { cards: AutorCardProps[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
        >
          {/* Imagem do Autor */}
          <Image
            src={card.img}
            alt={card.nome}
            width={120}
            height={120}
            className="rounded-full mb-4 border-4 border-green-500"
          />
          {/* Informações do Autor */}
          <div className="text-center break-words">
            <h2 className="text-lg font-bold text-gray-800 mb-2">{card.nome}</h2>
            <p className="text-gray-600 mb-1">
              <span className="font-semibold">Turma:</span> {card.turma}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-semibold">RM:</span> {card.rm}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-semibold">GitHub:</span>{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://github.com/${card.usuarioGithub.toLowerCase()}`}
                className="text-blue-600 hover:underline break-all"
              >
                {card.usuarioGithub}
              </a>
            </p>
            <p className="text-gray-600 break-words">
              <span className="font-semibold">LinkedIn:</span>{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={card.linkedin}
                className="text-blue-600 hover:underline break-all"
              >
                {card.linkedin}
              </a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
