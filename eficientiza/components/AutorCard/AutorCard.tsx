import Image from "next/image";
import { AutorCardProps } from "@/types/AutorCard";

export default function CardAutor(props: AutorCardProps) {
  const { img, nome, rm, usuarioGithub } = props;

  return (
    <div className="flex justify-start items-center gap-6">
      <Image src={img} alt={nome} />
      <p className="text-black text-2xl font-bold">
        Nome: {nome}
        <br />
        RM: {rm}
        <br />
        GitHub:{" "}
        <a
          target="_blank"
          href={`https://github.com/${usuarioGithub.toLowerCase()}`}
        >
          {usuarioGithub}
        </a>
      </p>
    </div>
  );
}
