import React, { useState } from 'react'
import axios from 'axios';
import './User.css';

const sendDatasAPI = async (dados) => {
    try {
      const response = await axios.post('http://localhost:8080/usuarios', dados);
      console.log('Dados enviados com sucesso:', response.data);
      
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
      
    }
  };
  

const FormUser = () => {
    const [nome_usuario, setName] = useState('');
    const [email_usuario, setEmail] = useState('');
    const [senha_usuario, setPassword] = useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();

        const userData = {
            name: nome_usuario,
            email: email_usuario,
            password: senha_usuario
        };
        sendDatasAPI(userData)
    };

    return (
        <div>
            <h1 className='title-page'>Consorcio de veiculos</h1>
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label className='name-label' htmlFor="name">Nome:</label>
                        <input
                        type="text"
                        id="nameInput"
                        value={nome_usuario}
                        onChange={(event) => setName(event.target.value)}
                        />
                    </div>

                    <div className='form-group'>
                        <label className='email-label' htmlFor="email">Email:</label>
                        <input
                        type="email"
                        id="email"
                        value={email_usuario}
                        onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>

                    <div className='form-group'>
                        <label className='password-label' htmlFor="senha">Senha:</label>
                        <input
                        type="password"
                        id="passwordInput"
                        value={senha_usuario}
                        onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    )
}

 export default FormUser;
