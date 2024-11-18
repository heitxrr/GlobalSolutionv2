'use client'

import { Drawer } from '@mui/material'
import { IoIosMenu } from 'react-icons/io'
import { IoCloseOutline } from 'react-icons/io5'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react';
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
          <ActiveLink linkTitle="Meus Pontos" linkUrl="/Pontos" />
          <ActiveLink linkTitle="Chatbot" linkUrl="/ChatBot" />
          <ActiveLink linkTitle="Perfil" linkUrl="/Perfil" />
          <ActiveLink linkTitle="FAQ" linkUrl="/Faq" />
          <li> 
            <button className='bg-blue-700 rounded-full w-3/4 h-12 text-nowrap text-white'>
              Baixar Aplicativo
            </button>
          </li>
        </ul>
      </Drawer>
    </>
  );
}

export default MenuButton;