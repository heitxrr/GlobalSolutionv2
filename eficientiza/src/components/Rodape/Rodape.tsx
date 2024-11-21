import Image from "next/image";
import { RodapeProps } from "@/src/types/Rodape";
import imgLogo from "@/public/images/logo-eficientiza.png";

export default function Rodape (props : RodapeProps) {

  const { gray } = props;

  if (gray) {
    return (
      <footer className="flex items-center justify-center max-h-28 h-28 px-2 py-0.5 bg-background">
        <Image className="block h-full w-auto" src={imgLogo} alt="Logo da Eficientiza" />
      </footer>
    )
  } else {
    return (
      <footer className="flex items-center justify-center max-h-28 h-28 px-2 py-0.5 bg-background">
        <Image className="block h-full w-auto" src={imgLogo} alt="Logo da Eficientiza" />
      </footer>
    )
  }
}