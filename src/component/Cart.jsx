import React, { useState } from 'react';
import axios from 'axios';
import ConfirmationBox from './ConfirmationBox';
import Notification from './Notification';

import './Cart.css';

const Cart = ({ cartItems, handleBackButtonClick, handleRemoveFromCart, setCart }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showReportButton, setShowReportButton] = useState(false);
  const [showProfit, setShowProfit] = useState(false);

  const handleRemoveFromCartClick = (item) => {
    handleRemoveFromCart(item);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  const handleFinishPurchase = () => {
    setShowConfirmation(true);
  };

  const handleConfirmPurchase = () => {
    setCart([]);
    setShowConfirmation(false);
    setShowReportButton(true);
  };

  const handleShowReportButtonClick = async () => {
    try {
      const response = await axios.get('http://localhost:8080/usuarios/relatorio', {
        responseType: 'blob',
      });

      const blob = new Blob([response.data], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      window.open(url);
    } catch (error) {
      console.error('Erro ao buscar o relatório:', error);
    }
  };

  const handleProfitClick = () => {
    setShowProfit(!showProfit);
  };

  return (
    <div className="cart-container">
      <h2>Carrinho de Compras</h2>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img className="img-carro" src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>R${item.price}</p>
              <button onClick={() => handleRemoveFromCartClick(item)}>Remover</button>
            </div>
          ))}
          <div className="btn-finalizar-container">
            <button onClick={handleFinishPurchase}>Finalizar Compra</button>
          </div>
        </div>
      ) : (
        <p>O carrinho está vazio.</p>
      )}

      {showConfirmation && (
        <ConfirmationBox
          onConfirm={handleConfirmPurchase}
          onCancel={() => setShowConfirmation(false)}
        />
      )}

      <div className="btn-voltar-container">
        <button onClick={handleBackButtonClick}>Voltar</button>
        {showReportButton && (
          <div className="report-button-container">
            <button onClick={handleShowReportButtonClick}>Mostrar Relatório</button>
          </div>
        )}
        {showReportButton && showProfit && (
          <div className="report-button-container">
            <button onClick={handleProfitClick}>Ver Lucro</button>
          </div>
        )}
      </div>

      {showNotification && (
        <Notification message="Veículo removido do carrinho com sucesso" onClose={handleCloseNotification} />
      )}
    </div>
  );
};

export default Cart;
