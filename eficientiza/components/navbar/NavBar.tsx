'use client'

import useUsuario from '@/hooks/UseUsuario';
import ActiveLink from '../activelink/ActiveLink';
import MenuButton from '../menubutton/MenuButton';
import Link from 'next/link';
//import logo from '@/app/assets/images/logo.png';
import logo from '/app/assets/images/logo.png';

function NavBar() {
    const { usuario } = useUsuario();

    return (
        <header className='bg-eficientiza w-full flex h-20 px-8 items-center sticky top-0 text-black z-10'>
            <div className='flex-shrink-0'>
                <Link href="/">
                    <figure className='w-20 h-auto'>
                        <img src='/images/logo-eficientiza.png' alt="Logo Eficientiza" />
                    </figure>
                </Link>
            </div>
    
            <div className='flex-1 flex justify-center items-center'>
                <ul className='flex items-center gap-0 divide-black divide-x-2 sm:hidden md:hidden lg:flex xl:flex 2xl:flex'>
                    <ActiveLink linkTitle={'Inicio'} linkUrl='/' />
                    <ActiveLink linkTitle={'Eventos'} linkUrl='/eventos' />
                    <ActiveLink linkTitle={'Dicas'} linkUrl='/faq' />
                    <ActiveLink linkTitle={'Contato'} linkUrl='/menucontato' />
                    <ActiveLink linkTitle={'Autores'} linkUrl='/autores' />
                </ul>
            </div>
        </header>
        
    );
}

export default NavBar;
