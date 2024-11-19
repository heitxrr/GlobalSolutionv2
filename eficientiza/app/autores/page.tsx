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
      nome: "Alexsandro Macedo De Jesus",
      rm: "557068",
      usuarioGithub: "",
    },
    {
      img: imgAutor2,
      nome: "Leonardo Faria Salazar",
      rm: "557484",
      usuarioGithub: "L-salazar",
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
      <main className="bg-primary">
        <section className="flex flex-col items-stretch justify-around gap-8 p-24 max-w-screen-xl mx-auto bg-primary">
          <AutorCard cards={autores} />
        </section>
      </main>
      <Rodape />
    </>
  );
}
