import React from 'react';
import './ConfirmationBox.css';

const ConfirmationBox = ({ onConfirm, onCancel }) => {
  return (
    <div className="confirmation-box">
      <h3>Deseja confirmar a compra?</h3>
      <button onClick={onConfirm}>Confirmar</button>
      <button onClick={onCancel}>Cancelar</button>
    </div>
  );
};

export default ConfirmationBox;
