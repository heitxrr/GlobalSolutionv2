'use client'

import { Drawer } from '@mui/material'
import { IoIosMenu } from 'react-icons/io'
import { IoCloseOutline } from 'react-icons/io5'
import { useState } from 'react';
import ActiveLink from '../activelink/ActiveLink';

function MenuButton() {
  const [mainMenuOpen, setMainMenuOpen] = useState<boolean>(false);

  return (
    <>
      <button 
        className='sm:block md:block lg:hidden xl:hidden 2xl:hidden' 
        onClick={() => setMainMenuOpen(!mainMenuOpen)}
      >
        {mainMenuOpen ? <IoCloseOutline size={"1.7rem"}/> : <IoIosMenu size={"1.7rem"}/> }
      </button>
      <Drawer
        open={mainMenuOpen}
        onClose={() => setMainMenuOpen(false)}
        sx={{
          zIndex: 1,
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: '100vw',
            marginTop: '5rem',
          },
        }}
        classes={{ paper: 'block lg:hidden xl:hidden 2xl:hidden' }} 
      >
        <ul
          onClick={() => setMainMenuOpen(false)}
          className="text-2xl w-full bg-white flex flex-col gap-12 py-8 px-11 lg:hidden xl:hidden 2xl:hidden"
        >
          <ActiveLink linkTitle="Inicio" linkUrl="/" />
          <ActiveLink linkTitle="Eventos" linkUrl="/eventos" />
          <ActiveLink linkTitle="Dicas" linkUrl="/faq" />
          <ActiveLink linkTitle="Contato" linkUrl="/contato" />
          <ActiveLink linkTitle="Autores" linkUrl="/autores" />
        </ul>
      </Drawer>
    </>
  );
}

export default MenuButton;
