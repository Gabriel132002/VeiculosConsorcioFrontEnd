import React, { useState } from 'react'
import { createUsuario } from '../Api/Crud';
import './User.css';

const FormUser = ({ handleButtonClick }) => {
    const [nome_usuario, setName] = useState('');
    const [email_usuario, setEmail] = useState('');
    const [senha_usuario, setPassword] = useState('');
    // const [usuarioId, setUsuarioId] = useState('')

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
          } catch (error) {
            console.error('Erro ao criar usuário:', error);
          }
        };
    
    // const handleDeleteById = async () =>{
    //     try{
    //         await deleteUsuario(usuarioId)
    //         console.log("Usuario deletado com sucesso")

    //     }catch(error){
    //         console.error("Erro ao deletar usuario", error)
    //     }
    // }
    

    return (
        <div>
            <header>
                <h1 className='title-page'>Cadastro de usuário</h1>
            </header>
            <div className='form-container'>
                <form>
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
                        type="text"
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

                    {/* <div className='form-group'>
                        <label className='delete-label'>Deletar:</label>
                        <input 
                        type="text"
                        id='delete'
                        value={usuarioId}
                        onChange={(event) => setUsuarioId(event.target.value)}/>

                    </div> */}
                    <button className='submit-button' type="submit" onClick={handleSubmit}>Enviar</button>
                    {/* <button type='button' onClick={handleDeleteById}>Deletar</button> */}
                    <button className='nextButton' type="button" onClick={handleButtonClick}>Continuar</button>

                </form>
            </div>
        </div>
    )
};

 export default FormUser;
