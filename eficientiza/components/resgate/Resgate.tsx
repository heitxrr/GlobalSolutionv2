import Recompensa from "@/types/Recompensa"
import { IoIosStar } from "react-icons/io"

interface ResgateProps {
  recompensa: Recompensa
}

function Resgate({ recompensa }: ResgateProps) {
  return (
    <li className="flex justify-between py-4 text-xl">
      <div>
        <p>Resgate: {recompensa.descricaoRecompensa}</p>
        <p>Data: {new Date().toLocaleDateString()}</p>
      </div>
      <div className="flex items-center gap-4">
        <h1>{recompensa.qtPontosUtilizados}</h1>
        <IoIosStar size={'2rem'} color={'yellow'} />
      </div>
    </li>
  )
}

export default Resgate