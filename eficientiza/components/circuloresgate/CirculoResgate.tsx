import Recompensa from '@/types/Recompensa';
import { IoIosStar } from 'react-icons/io';

interface CirculoResgateProps {
  recompensa: Recompensa
  posicaoTexto: string
}

function CirculoResgate({ recompensa, posicaoTexto }: CirculoResgateProps) {
  return (
    <div className="relative w-40 flex flex-col items-center text-center">
      <div className={`flex items-center justify-center w-[9rem] h-[9rem] rounded-full ${recompensa.qrCode ? 'bg-green-500' : 'bg-blue-700'}`}>
        {Array.from({ length: recompensa.valorEmEstrelas }, (_, index) => (
          <IoIosStar key={index} color='yellow' />
        ))}
      </div>
      <p className={`mt-2 ${posicaoTexto === 'Top' ? 'relative lg:absolute xl:absolute 2xl:absolute lg:top-[-4rem] xl:top-[-4rem] 2xl:top-[-4rem]' : 'relative lg:absolute xl:absolute 2xl:absolute lg:bottom-[-4rem] xl:bottom--[-4rem] 2xl:bottom-[-4rem]'}`}>
        {recompensa.descricao}
      </p>
    </div>
  )
}

export default CirculoResgate