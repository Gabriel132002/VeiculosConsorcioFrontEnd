import React from 'react'

const Vehicles = ({ handleBackButtonClick }) => {
  return (
    <div>
        <button type='button' onClick={handleBackButtonClick}>Voltar</button>
    </div>
  )
}

export default Vehicles