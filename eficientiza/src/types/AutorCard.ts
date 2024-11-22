import { StaticImageData } from 'next/image';

export type AutorCardProps = {
    img: StaticImageData;
    nome: string;
    turma: string;
    rm: string;
    usuarioGithub: string;
    linkedin: string;
  }