import React, { useState } from 'react'
import { createUsuario } from '../Api/Crud';
import './User.css';

const FormUser = () => {
    const [nome_usuario, setName] = useState('');
    const [email_usuario, setEmail] = useState('');
    const [senha_usuario, setPassword] = useState('');

    const handleSubmit = async (event) =>{
        event.preventDefault();

        const userData = {
            nome_usuario: nome_usuario,
            email_usuario: email_usuario,
            senha_usuario: senha_usuario
        };
        
        try {
            await createUsuario(userData);
            console.log('Usuário inserido com sucesso!');
            // Faça algo após criar o usuário, se necessário
          } catch (error) {
            console.error('Erro ao criar usuário:', error);
            // Trate o erro de acordo com sua necessidade
          }
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
};

 export default FormUser;
