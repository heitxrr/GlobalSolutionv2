'use client'

import Redirect from '@/utils/Redirect';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface UsuarioCadastro {
  email: string;
  cpf: string;
  senha: string;
  confirmarSenha: string;
}

function Cadastro() {
  const [usuarioCadastro, setUsuarioCadastro] = useState<UsuarioCadastro>({
    email: '',
    cpf: '',
    senha: '',
    confirmarSenha: ''
  });

  const [erros, setErros] = useState({
    email: '',
    cpf: '',
    senha: '',
    confirmarSenha: ''
  });

  const atualizarEstado = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUsuarioCadastro({
      ...usuarioCadastro,
      [name]: value
    });
    validarCampo(name, value);
  };

  const validarCampo = (campo: string, valor: string) => {
    let mensagem = '';
    switch (campo) {
      case 'email':
        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(valor)) {
          mensagem = 'E-mail inválido';
        }
        break;
      case 'cpf':
        if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(valor)) {
          mensagem = 'CPF inválido';
        }
        break;
      case 'senha':
        if (valor.length < 6) {
          mensagem = 'Senha deve ter pelo menos 6 caracteres';
        }
        break;
      case 'confirmarSenha':
        if (valor !== usuarioCadastro.senha) {
          mensagem = 'Senhas não coincidem';
        }
        break;
    }
    setErros(prevErros => ({
      ...prevErros,
      [campo]: mensagem
    }));
  };

  const cadastrar = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(erros).every(error => error === '') && Object.values(usuarioCadastro).every(value => value !== '')) {
      alert('Cadastro realizado com sucesso!');
      Redirect({path: '/'});
    } else {
      alert('Por favor, corrija os erros antes de enviar.');
    }
  };

  return (
    <main className='w-full flex items-center pt-12 flex-col gap-12'>
      <div className='bg-[#00A0FB] w-[500px] p-12 text-white mx-auto rounded-3xl flex flex-col items-center gap-16'>
        <h1 className='text-2xl font-bold'>Cadastrar-se</h1>
        <form className='w-full gap-6 flex flex-col' onSubmit={cadastrar}>
          <fieldset>
            <input
              className={`w-full bg-white text-black p-4 rounded-full ${erros.email ? 'border-red-500 border-2' : ''}`}
              id="email"
              name="email"
              type="text"
              placeholder="E-mail"
              value={usuarioCadastro.email}
              onChange={atualizarEstado}
            />
            {erros.email && <p className='text-red-500 text-sm'>{erros.email}</p>}
          </fieldset>
          <fieldset>
            <input
              className={`w-full bg-white text-black p-4 rounded-full ${erros.cpf ? 'border-red-500 border-2' : ''}`}
              id="cpf"
              name="cpf"
              type="text"
              placeholder="CPF"
              value={usuarioCadastro.cpf}
              onChange={atualizarEstado}
            />
            {erros.cpf && <p className='text-red-500 text-sm'>{erros.cpf}</p>}
          </fieldset>
          <fieldset>
            <input
              className={`w-full bg-white text-black p-4 rounded-full ${erros.senha ? 'border-red-500 border-2' : ''}`}
              id="senha"
              name="senha"
              type="password"
              placeholder="Senha"
              value={usuarioCadastro.senha}
              onChange={atualizarEstado}
            />
            {erros.senha && <p className='text-red-500 text-sm'>{erros.senha}</p>}
          </fieldset>
          <fieldset>
            <input
              className={`w-full bg-white text-black p-4 rounded-full ${erros.confirmarSenha ? 'border-red-500 border-2' : ''}`}
              id="confirmarSenha"
              name="confirmarSenha"
              type="password"
              placeholder="Confirmar Senha"
              value={usuarioCadastro.confirmarSenha}
              onChange={atualizarEstado}
            />
            {erros.confirmarSenha && <p className='text-red-500 text-sm'>{erros.confirmarSenha}</p>}
          </fieldset>
          <button className='mt-4 w-full rounded-full bg-blue-700 text-lg p-2' type='submit'>Cadastrar</button>
        </form>
      </div>
    </main>
  );
};

export default Cadastro;