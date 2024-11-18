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
        <header className='bg-[#00A0FB] w-full flex h-20 justify-between px-8 items-center sticky top-0 text-white z-10'>
            <div className='flex gap-8'>
                <MenuButton />
                <Link href="/">
                    <figure className='w-16 h-auto '>
                        <img src='/images/logo.png' alt="" />
                    </figure>
                </Link>

                <ul className=' items-center hidden divide-solid divide-x-2  sm:hidden md:hidden lg:flex xl:flex 2xl:flex'>
                    <ActiveLink linkTitle={'Inicio'} linkUrl='/' />
                    <ActiveLink linkTitle={'Meus Pontos'} linkUrl='/pontos' />
                    <ActiveLink linkTitle={'Chatbot'} linkUrl='/chatbot' />
                    <ActiveLink linkTitle={'Perfil'} linkUrl='/perfil' />
                    <ActiveLink linkTitle={'FAQ'} linkUrl='/faqs' />
                </ul>
            </div>

            <section className='flex gap-8 items-center'>
                <button className='bg-blue-700 rounded-full px-4 w-full h-12 text-nowrap hidden sm:block md:block lg:block xl:block 2xl:block'>Baixar Aplicativo</button>

                <div className='flex items-center gap-4'>
                    {usuario ? (
                        <>
                            <h1 className='text-right text-nowrap'>Seja bem vindo, <br />{usuario.nome}</h1>
                            <Link href='/perfil'>
                            </Link>
                        </>
                    ) : (
                        <Link href='/login'>
                            <button className='bg-green-600 px-4 py-2 rounded-full'>Login</button>
                        </Link>
                    )}
                </div>
            </section>
        </header>
    );
}

export default NavBar;
