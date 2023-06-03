import React, { useState } from 'react';
import axios from 'axios';
import './UserLogin.css';

const UserLogin = ({ handleLoginSuccess, handleRegisterClick }) => {
  const [nome_usuario, setUsername] = useState('');
  const [senha_usuario, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validar campos de entrada
    if (!nome_usuario || !senha_usuario) {
      setError('Por favor, preencha todos os campos');
      return;
    }

    try {
      // Fazer a chamada à API para autenticação
      const response = await axios.post('http://localhost:8080//usuarios/login', {
        nome_usuario,
        senha_usuario,
      });

      // Verificar a resposta da API
      if (response.status === 200) {
        // Autenticação bem-sucedida
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
        {/* Campos de entrada de usuário e senha */}
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
