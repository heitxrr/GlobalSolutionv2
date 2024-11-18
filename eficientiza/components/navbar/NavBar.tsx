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
        <header className='bg-eficientiza w-full flex h-20 justify-between px-8 items-center sticky top-0 text-black z-10'>
            <div className='flex gap-8'>
                <MenuButton />
                <Link href="/">
                    <figure className='w-20 h-auto '>
                        <img src='/images/logo-eficientiza.png' alt="Logo Eficientiza" />
                    </figure>
                </Link>

                <ul className=' items-center hidden divide-black divide-x-2  sm:hidden md:hidden lg:flex xl:flex 2xl:flex'>
                    <ActiveLink linkTitle={'Inicio'} linkUrl='/' />
                    <ActiveLink linkTitle={'Meus Pontos'} linkUrl='/pontos' />
                    <ActiveLink linkTitle={'Chatbot'} linkUrl='/chatbot' />
                    <ActiveLink linkTitle={'Perfil'} linkUrl='/perfil' />
                    <ActiveLink linkTitle={'FAQ'} linkUrl='/faqs' />
                </ul>
            </div>


        </header>
    );
}

export default NavBar;
