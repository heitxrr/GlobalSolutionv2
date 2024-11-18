import AutorCard from "@/components/AutorCard/AutorCard";
import imgAutor1 from "@/public/images/logo-eficientiza.png";
import imgAutor2 from "@/public/images/logo-eficientiza.png";
import imgAutor3 from "@/src/img/autores/heitor.png";
import { AutorCardProps } from "@/types/AutorCard";
import Rodape from "@/components/Rodape/Rodape";

export default function Autores() {
  const autores: AutorCardProps[] = [
    {
      img: imgAutor1,
      nome: "Alexsandro Macedo de Jesus",
      rm: "557068",
      usuarioGithub: "",
    },
    {
      img: imgAutor2,
      nome: "Leonardo Faria Salazar",
      rm: "557484",
      usuarioGithub: "L-Salazar",
    },
    {
      img: imgAutor3,
      nome: "Heitor Romero da Rocha",
      rm: "558301",
      usuarioGithub: "heitxrr",
    },
  ];
  return (
    <>
      <main className="bg-white">
        <section className="flex flex-col items-stretch justify-around gap-8 p-24 max-w-screen-xl mx-auto ">
          {autores.map((autor) => (
            <AutorCard
              key={autor.rm}
              img={autor.img}
              nome={autor.nome}
              rm={autor.rm}
              usuarioGithub={autor.usuarioGithub}
            />
          ))}
        </section>
      </main>
      <Rodape />
    </>
  );
}
