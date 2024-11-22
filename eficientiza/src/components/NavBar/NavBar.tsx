'use client'

import ActiveLink from '@/components/ActiveLink/ActiveLink';
import MenuButton from '@/components/MenuButton/MenuButton';
import Link from 'next/link';

function NavBar() {
    return (
        <header className='bg-eficientiza w-full flex h-20 px-4 md:px-10 items-center sticky top-0 text-black z-50'>
            <div className='flex-shrink-0'>
                <Link href="/">
                    <figure className='w-24 h-auto'>
                        <img src='/images/logo-eficientiza-navbar.png' alt="Logo Eficientiza" />
                    </figure>
                </Link>
            </div>
    
            <div className='flex-1 flex justify-end md:justify-center items-center'>
                <ul className='hidden md:flex items-center gap-4 divide-black divide-x-2'>
                    <ActiveLink linkTitle={'Inicio'} linkUrl='/' />
                    <ActiveLink linkTitle={'Eventos'} linkUrl='/eventos' />
                    <ActiveLink linkTitle={'Dicas'} linkUrl='/dicas' />
                    <ActiveLink linkTitle={'Contato'} linkUrl='/contato' />
                    <ActiveLink linkTitle={'Autores'} linkUrl='/autores' />
                </ul>
                <div className='md:hidden'>
                    <MenuButton />
                </div>
            </div>
        </header>
    );
}

export default NavBar;
