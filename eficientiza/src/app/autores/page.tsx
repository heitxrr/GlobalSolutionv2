import AutorCard from "@/src/components/AutorCard/AutorCard";
import imgAutor1 from "@/src/img/autores/alexsandro.png";
import imgAutor2 from "@/src/img/autores/leonardo.png";
import imgAutor3 from "@/src/img/autores/heitor.png";
import { AutorCardProps } from "@/src/types/AutorCard";
import Rodape from "@/src/components/Rodape/Rodape";

export default function Autores() {
  const autores: AutorCardProps[] = [
    {
      img: imgAutor1,
      nome: "Alexsandro Macedo De Jesus",
      turma: "1TDSR",
      rm: "557068",
      usuarioGithub: "AlexxsandroM",
    },
    {
      img: imgAutor2,
      nome: "Leonardo Faria Salazar",
      turma: "1TDSR",
      rm: "557484",
      usuarioGithub: "L-salazar",
    },
    {
      img: imgAutor3,
      nome: "Heitor Romero da Rocha",
      turma: "1TDSPW",
      rm: "558301",
      usuarioGithub: "heitxrr",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow ">
        <section className="flex flex-col lg:flex-row items-stretch justify-around gap-8 p-8 sm:p-16 md:p-24 max-w-screen-xl mx-auto bg-primary">
          <AutorCard cards={autores} />
        </section>
      </main>
      <Rodape />
    </div>
  );
}
