import { StaticImageData } from 'next/image';

export default interface CardPostProps {
    title: string;
    description: string;
    link: string;
    img: StaticImageData;
  }