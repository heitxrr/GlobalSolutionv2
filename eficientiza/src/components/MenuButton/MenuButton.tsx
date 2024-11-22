'use client'

import { Drawer } from '@mui/material'
import { IoIosMenu } from 'react-icons/io'
import { IoCloseOutline } from 'react-icons/io5'
import { useState } from 'react';
import ActiveLink from '@/components/ActiveLink/ActiveLink';

function MenuButton() {
  const [mainMenuOpen, setMainMenuOpen] = useState<boolean>(false);

  return (
    <>
      <button 
        className='block lg:hidden z-[1301]' 
        onClick={() => setMainMenuOpen(!mainMenuOpen)}
      >
        {mainMenuOpen ? <IoCloseOutline size={"1.7rem"}/> : <IoIosMenu size={"1.7rem"}/> }
      </button>
      <Drawer
        open={mainMenuOpen}
        onClose={() => setMainMenuOpen(false)}
        sx={{
          zIndex: 1300, // Ajuste o zIndex do Drawer
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: '100vw',
            marginTop: '5rem',
            backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fundo transparente com leve cor branca
          },
        }}
        classes={{ paper: 'block lg:hidden' }} 
      >
        <ul
          onClick={() => setMainMenuOpen(false)}
          className="text-2xl w-full flex flex-col gap-12 py-8 px-11 lg:hidden"
        >
          <ActiveLink linkTitle="Inicio" linkUrl="/" />
          <ActiveLink linkTitle="Eventos" linkUrl="/eventos" />
          <ActiveLink linkTitle="Dicas" linkUrl="/dicas" />
          <ActiveLink linkTitle="Contato" linkUrl="/contato" />
          <ActiveLink linkTitle="Autores" linkUrl="/autores" />
        </ul>
      </Drawer>
    </>
  );
}

export default MenuButton;
