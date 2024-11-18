import Image from "next/image";
import { AutorCardProps } from "@/types/AutorCard";

export default function CardAutor({ cards }: { cards: AutorCardProps[] }) {
  return (
    <div className="flex justify-center items-center gap-6 flex-wrap p-8 bg-gray-100">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex justify-start items-center gap-4 bg-white shadow-lg rounded-lg p-4"
        >
          {/* Imagem */}
          <Image
            src={card.img}
            alt={card.nome}
            width={100}
            height={100}
            className="rounded-full"
          />
          {/* Informações */}
          <p className="text-black text-lg font-semibold">
            Nome: {card.nome}
            <br />
            RM: {card.rm}
            <br />
            GitHub:{" "}
            <a
              target="_blank"
              href={`https://github.com/${card.usuarioGithub.toLowerCase()}`}
              className="text-black hover:underline"
            >
              {card.usuarioGithub}
            </a>
          </p>
        </div>
      ))}
    </div>
  );
}
