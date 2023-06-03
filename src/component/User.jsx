import React, { useState } from 'react'
import { createUsuario } from '../Api/Crud';
import Notification from './Notification';
import './User.css';
import './Notification.css'

const FormUser = ({ handleButtonClick }) => {
    const [showNotification, setShowNotification] = useState(false)
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
            setShowNotification(true)         
          } catch (error) {
            setShowNotification('Erro ao cadastrar usuário:', error);
          }
        };

        const handleCloseNotificatio = () =>{
            setShowNotification(false)
        }
    

    return (
        <div className='user-container'>
            <main>
            <header>
                <h1 className='title-user'>Cadastro de usuário</h1>
            </header>
            <div className='form-container'>
                <form>
                    <div className='form-group'>
                        <input className='input-text'
                        placeholder='Nome'
                        type="text"
                        id="nameInput"
                        value={nome_usuario}
                        onChange={(event) => setName(event.target.value)}
                        />
                    </div>

                    <div className='form-group'>
                        <input className='input-text'
                        placeholder='Email'
                        type="text"
                        id="email"
                        value={email_usuario}
                        onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>

                    <div className='form-group'>
                        <input className='input-password'
                        placeholder='Senha'
                        type="password"
                        id="passwordInput"
                        value={senha_usuario}
                        onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>

                    <button className='submit-button' type="submit" onClick={handleSubmit}>Enviar</button>
                    <button className='nextButton' type="button" onClick={handleButtonClick}>Continuar</button>

                </form>
            </div>
            {showNotification && (<Notification message="Usuario cadastrado com sucesso" onClose={handleCloseNotificatio}/>)}
            </main>
        </div>
    )
};

 export default FormUser;
