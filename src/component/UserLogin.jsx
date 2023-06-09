import React, { useState } from 'react';
import { login } from '../Api/Crud';
import './UserLogin.css';

const UserLogin = ({ handleLoginSuccess, handleRegisterClick }) => {
  const [nome_usuario, setUsername] = useState('');
  const [senha_usuario, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!nome_usuario || !senha_usuario) {
      setError('Por favor, preencha todos os campos');
      return;
    }

    try {
      const response = await login(nome_usuario, senha_usuario);
      if (response) {
        handleLoginSuccess();
      } else {
        setError('Usuário ou senha inválidos');
      }
    } catch (error) {
      setError('Ocorreu um erro durante a autenticação');
    }
  };

  return (
    <div className="page-container">
      <h2>Login de Usuário</h2>
      <form onSubmit={handleLogin}>
        <input
          className="name-input"
          type="text"
          placeholder="Usuário"
          value={nome_usuario}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="password-input"
          type="password"
          placeholder="Senha"
          value={senha_usuario}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        <button className="btn-sign-in" type="submit">
          Entrar
        </button>
        <button onClick={handleRegisterClick}>Cadastre-se</button>
      </form>
    </div>
  );
};

export default UserLogin;
