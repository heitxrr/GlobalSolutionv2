"use client"

import { useRef } from 'react';
import Usuario from '@/types/Usuario';
import useForm, { FormState } from '../../hooks/UseForms';
import Redirect from '@/utils/Redirect';
import useUsuario from '@/hooks/UseUsuario';
import logo from '../assets/images/logo.png';

interface UsuarioLogin extends FormState {
  email: string;
  senha: string;
}

function Login() {
  const formRef = useRef<HTMLFormElement>(null);
  const { setUsuario } = useUsuario();

  const submitCallback = async (values: FormState) => {
    const usuarioLogin = values as UsuarioLogin; 
    try {
      const response = await fetch('http://localhost:8080/usuario/3');
      console.log(response);
      const usuario: Usuario = await response.json();

      usuarioLogin.email = usuarioLogin.email.trim();
      usuarioLogin.senha = usuarioLogin.senha.trim();
      var usuarioValido = true;

      if(usuarioLogin.email === 'admin' && usuarioLogin.senha === 'admin'){
        usuarioValido = true;
      }

      if (usuarioValido) {
        alert("Logado com sucesso!");
        setUsuario(usuario);
        Redirect({ path: '/perfil' }); 
      } else {
        alert("Email ou Senha Incorretos!");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Ocorreu um erro ao tentar fazer login. Tente novamente.");
    }
  };

  const { data, errors, loadingSubmit, handleChange, handleSubmit } = useForm(
    formRef,
    { email: '', senha: '' },
    submitCallback 
  );

  return (
    <main className='w-full flex items-center pt-12 flex-col gap-12'>
      <figure>
      <img src='/images/logo.png' alt="" className='w-40 h-40 object-contain' /> {/* Ajuste os valores conforme necessário */}
</figure>

      <div className='bg-[#00A0FB] w-[500px] p-12 text-white mx-auto rounded-3xl flex flex-col items-center gap-16'>
        <h1 className='text-2xl font-bold'>Seja Bem Vindo!</h1>
        <form ref={formRef} onSubmit={handleSubmit} className='w-full gap-6 flex flex-col'>
          <fieldset>
            <input
              className='w-full bg-white text-black p-4 rounded-full'
              id="email"
              name="email"
              type="text"
              placeholder="E-mail"
              value={data.email}
              onChange={handleChange}
            />
            {errors.email && <p className='text-red-500'>{errors.email}</p>}
          </fieldset>
          <fieldset>
            <input
              className='w-full bg-white text-black p-4 rounded-full'
              id="senha"
              name="senha"
              type="password"
              placeholder="Senha"
              value={data.senha}
              onChange={handleChange}
            />
            {errors.senha && <p className='text-red-500'>{errors.senha}</p>}
            <p className='mt-4'>Esqueceu sua senha?</p>
          </fieldset>
          <button className='mt-4 w-full rounded-full bg-blue-700 text-lg p-2' type='submit' disabled={loadingSubmit}>
            {loadingSubmit ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
        <button className="hover:underline mt-4" onClick={() => Redirect({ path: '/cadastro' })}>
            Cadastrar-se
          </button>
      </div>
    </main>
  );
}

export default Login;
