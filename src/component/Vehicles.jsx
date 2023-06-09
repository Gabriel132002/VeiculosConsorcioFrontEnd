import React, { useState } from 'react';
import Notification from './Notification';

import Cart from './Cart';

import civicImage from '../assets/civicBranco.jpg';
import hrvImage from '../assets/hrvBranco.jpg';
import cityImage from '../assets/cityCinza.jpg';
import cartIcon from '../assets/carrinho.png'

import './Vehicles.css';

const Vehicles = ({ handleBackButtonClickUser, handleAddToCart }) => {
  const [showNotification, setShowNotification] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const vehicleList = [
    { id: 1, name: 'Civic', price: 200000, image: civicImage },
    { id: 2, name: 'Hrv', price: 130000, image: hrvImage },
    { id: 3, name: 'City', price: 150000, image: cityImage },
  ];

  const handleAddToCartClick = (vehicle) => {
    handleAddToCart(vehicle);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  const handleCartClick = () => {
    setShowCart(true)
  }

  return (
    <div>   
      <h2>Página de escolha de veículos</h2>
      {showCart && <Cart />}
      <img
          className="cart-icon"
          src={cartIcon}
          alt="Carrinho"
          onClick={handleCartClick}
        />
      <main>    
        {vehicleList.map((vehicle) => (
          <section key={vehicle.id}>
            <div className="card">
              <img className='card-image' src={vehicle.image} alt={vehicle.name} />
              <h3>{vehicle.name}</h3>
              <p>R${vehicle.price}</p>
              <button className="btn-add-cart" onClick={() => handleAddToCartClick(vehicle)}>
                Adicionar ao Carrinho
              </button>
            </div>
          </section>
        ))}
      </main>
      {showNotification && (
        <Notification message="Carro adicionado ao carrinho" onClose={handleCloseNotification} />
      )}
    </div>
  );
};

export default Vehicles;
