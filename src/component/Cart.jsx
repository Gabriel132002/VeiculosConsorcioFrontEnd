import React, { useState } from 'react';
import ConfirmationBox from './ConfirmationBox';
import Notification from './Notification';

import './Cart.css';

const Cart = ({ cartItems, handleBackButtonClick, handleRemoveFromCart, setCart }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showNotification, setShowNotification] = useState(false)

  const handleRemoveFromCartClick = (item) =>{
    handleRemoveFromCart(item)
    setShowNotification(true)
    setTimeout(() => {
      setShowNotification(false)
    }, 3000)
  }

  const handleFinishPurchase = () => {
    setShowConfirmation(true);
  };

  const handleConfirmPurchase = () => {
    setCart([]);
    setShowConfirmation(false);
  };

  return (
    <div className='cart-container'>
      <h2>Carrinho de Compras</h2>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img className='img-carro' src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>R${item.price}</p>
              <button onClick={() => handleRemoveFromCartClick(item)}>Remover</button>
            </div>
          ))}
          <div className='btn-finalizar-container'>
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

      <div className='btn-voltar-container'>
        <button onClick={handleBackButtonClick}>Voltar</button>
      </div>

      {showNotification && (
        <Notification message='Veículo removido do carrinho com sucesso'/>
      )}
    </div>
  );
};

export default Cart;
