import React from 'react';
import './Cart.css'

const Cart = ({ cartItems, handleBackButtonClick, handleRemoveFromCart }) => {
  return (
    <div className="cart-container">
      <h2>Seu Carrinho</h2>
      {cartItems.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img className="cart-item-image" src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>R${item.price}</p>
                <div>
                  <button className='btn-remove' onClick={() => handleRemoveFromCart(item)}>Remover</button>
                  <button>Finalizar compra</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <button className="button-back" onClick={handleBackButtonClick}>
        Voltar
      </button>
    </div>
  );
};

export default Cart;
