import React from 'react'

const Vehicles = ({ handleBackButtonClick }) => {
  return (
    <div>
      <label htmlFor="">Ola, você está na tela de veículos escolha um e se divirta</label>
        <button type='button' onClick={handleBackButtonClick}>Voltar</button>
    </div>
  )
}

export default Vehicles